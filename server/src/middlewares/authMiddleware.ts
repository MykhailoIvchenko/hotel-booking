import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError.js';
import { jwtService } from '../services/jwtService.js';
import { IUser } from '../utils/types.js';
import { UserModel } from '../models/User.js';

export interface AuthRequest extends Request {
  user?: IUser;
}

export async function authMiddleware(
  req: AuthRequest,
  _: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw ApiError.Unauthorized();
    }

    const [, accessToken] = authHeader.split(' ');

    if (!accessToken) {
      throw ApiError.Unauthorized();
    }

    const userPayload = jwtService.validateAccessToken(accessToken);

    if (!userPayload) {
      throw ApiError.Unauthorized();
    }

    const user = await UserModel.findById(userPayload.id);

    if (!user) {
      throw ApiError.Unauthorized();
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}
