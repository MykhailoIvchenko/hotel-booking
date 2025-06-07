import bcrypt from 'bcryptjs';
import { ApiError } from '../exceptions/ApiError.js';
import { jwtService } from '../services/jwtService.js';
import { tokenService } from '../services/tokenService.js';
import { userService } from '../services/userService.js';
import { v4 as uuidv4 } from 'uuid';
import {
  emailPattern,
  whatsAppNumberPattern,
} from '../utils/validationPatterns.js';
import { Request, Response } from 'express';
import { twilioService } from '../services/twilioService.js';
import { IUser } from '../utils/types.js';
import { AuthRequest } from '../middlewares/authMiddleware.js';
import { notificationService } from '../services/notificationService.js';
import { NotificationTypes } from '../utils/enums.js';

function validateEmail(value: string) {
  if (!value) {
    return 'Email is required';
  }

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }

  return '';
}

function validatePhone(value: string) {
  if (!value) {
    return 'Phone number is required';
  }

  if (!whatsAppNumberPattern.test(value)) {
    return 'Phone number is not valid';
  }

  return '';
}

function validatePassword(value: string) {
  if (!value) {
    return 'Password is required';
  }

  if (value.length < 6) {
    return 'Password should contain at least 6 characters';
  }

  return '';
}

async function register(req: Request, res: Response) {
  const { email, fullName, password, phone, alternatePhone, photo } = req.body;

  const errors = {
    email: validateEmail(email),
    phone: validatePhone(phone),
    password: validatePassword(password),
  };

  if (errors.email || errors.phone || errors.password) {
    throw ApiError.BadRequest('Validation error', errors);
  }

  const user = await userService.register({
    email,
    fullName,
    password,
    phone,
    alternatePhone,
    photo,
  });

  await sendAuthentication(res, user);
}

async function recover(req: Request, res: Response) {
  const { phone } = req.params;

  try {
    const user = await userService.getByPhone(phone);

    if (!user) {
      throw ApiError.BadRequest('User with this phone does not exist');
    }

    const token = uuidv4();

    user.recoverToken = token;

    await user.save();

    const message = `Your verification token is ${token}`;

    await twilioService.sendMessage(phone, message);

    res.status(200).send({
      message: 'OK',
    });
  } catch (error) {
    res.status(500);
  }
}

async function checkRecoverToken(req: Request, res: Response) {
  const { phone, token } = req.body;

  try {
    const user = await userService.getByPhone(phone);

    if (!user) {
      throw ApiError.BadRequest('User with this phone does not exist');
    }

    if (user.recoverToken === token) {
      res.status(200).send({
        message: 'OK',
      });
    } else {
      res.status(406).send({
        message: 'DECLINED',
      });
    }
  } catch (error) {
    res.status(500).send({
      message: 'error',
    });
  }
}

async function reset(req: Request, res: Response) {
  const { phone, password } = req.body;

  try {
    await userService.reset(phone, password);

    res.status(200).send({
      message: 'OK',
    });
  } catch (error) {
    res.status(500).send({
      message: 'error',
    });
  }
}

async function checkPassword(phone: string, password: string) {
  const user = await userService.getByPhone(phone);

  if (!user) {
    throw ApiError.BadRequest('User with this phone does not exist');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw ApiError.BadRequest('Password is wrong');
  }

  return user;
}

async function sendAuthentication(res: Response, user: IUser) {
  const userData = userService.normalize(user);
  const userDataForJwt = userService.normalizeForJwt(user);
  const accessToken = jwtService.generateAccessToken(userDataForJwt);
  const refreshToken = jwtService.generateRefreshToken(userDataForJwt);

  const expirtationTime = 30 * 24 * 60 * 60 * 1000;

  const expiresAt = Date.now() + expirtationTime;

  await tokenService.save(user.id, refreshToken, new Date(expiresAt));

  res.cookie('refreshToken', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    // sameSite: 'lax', //Uncomment it for the local development
    sameSite: 'none', //Comment it for the local development
    // secure: false, //Uncomment it for the local development
    secure: true, //Comment it for the local development
  });

  res.send({
    user: user,
    accessToken,
  });
}

async function login(req: Request, res: Response) {
  const { phone, password } = req.body;

  const user = await checkPassword(phone, password);

  if (user) {
    await notificationService.create(
      user.id,
      NotificationTypes.Profile,
      'Authentication action',
      `You was successfully logged in`
    );

    await sendAuthentication(res, user);
  }
}

async function refresh(req: Request, res: Response) {
  const { refreshToken } = req.cookies;

  const userData = jwtService.validateRefreshToken(refreshToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  const token = await tokenService.getByToken(refreshToken);

  if (!token) {
    throw ApiError.Unauthorized();
  }

  const user = await userService.getByPhone(userData.phone);

  if (user) {
    await sendAuthentication(res, user);
  }
}

async function logout(req: Request, res: Response) {
  const userId = req.user?.id;

  const { refreshToken } = req.cookies;

  const userData = jwtService.validateRefreshToken(refreshToken);

  res.clearCookie('refreshToken');

  if (userData) {
    await tokenService.remove(userData.id);

    if (userId) {
      await notificationService.create(
        userId,
        NotificationTypes.Profile,
        'Authentication action',
        `You was logged out`
      );
    }
  }

  res.sendStatus(204);
}

async function reauth(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await checkPassword(email, password);

  if (user) {
    res.status(200).send({
      message: 'OK',
    });
  } else {
    res.status(404).send({
      message: 'Failed',
    });
  }
}

async function getMe(req: AuthRequest, res: Response) {
  if (!req.user) {
    throw ApiError.Unauthorized();
  }

  const user = await userService.getByPhone(req.user.phone);

  if (!user) {
    throw ApiError.Unauthorized();
  }

  res.send({
    user: userService.normalize(user),
  });
}

export const authController = {
  register,
  login,
  logout,
  refresh,
  recover,
  checkRecoverToken,
  reset,
  checkPassword,
  reauth,
  getMe,
};
