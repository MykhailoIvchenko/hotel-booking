import bcrypt from 'bcryptjs';
import { ApiError } from '../exceptions/ApiError.js';
import { UserModel as User } from '../models/User.js';
import { IUser, IUserRegistrationData } from '../utils/types.js';

async function getAll() {
  const users = await User.find().sort({ name: 1 });

  return users;
}

function getByEmail(email: string) {
  return User.findOne({
    email,
  });
}

function getByPhone(phone: string) {
  return User.findOne({
    phone,
  });
}

function normalize({
  id,
  email,
  fullName,
  phone,
  role,
  photo,
  alternatePhone,
}: IUser) {
  return {
    id,
    email,
    fullName,
    phone,
    role,
    photo,
    alternatePhone,
  };
}

function normalizeForJwt({ id, email, fullName, phone, role }: IUser) {
  return {
    id,
    email,
    fullName,
    phone,
    role,
  };
}

async function register(userData: IUserRegistrationData) {
  const { email, phone, alternatePhone, fullName, photo, password } = userData;

  const existingUserWithPhone = await getByPhone(phone);

  if (existingUserWithPhone) {
    throw ApiError.BadRequest('Validation error', {
      phone: 'Phone is already taken',
    });
  }

  const existingUserWithEmail = await getByEmail(email);

  if (existingUserWithEmail) {
    throw ApiError.BadRequest('Validation error', {
      email: 'Email is already taken',
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const registeredUser = await User.create({
    email,
    fullName,
    password: hash,
    phone,
    ...(alternatePhone && { alternatePhone }),
    ...(photo && { photo }),
  });

  return registeredUser;
}

async function reset(phone: string, password: string) {
  const user = await getByPhone(phone);

  if (!user) {
    throw ApiError.BadRequest('Validation error', {
      phone: 'Phone is wrong',
    });
  }

  const hash = await bcrypt.hash(password, 10);

  user.password = hash;
  user.recoverToken = null;

  await user.save();
}

async function updateName(phone: string, fullName: string) {
  const user = await getByPhone(phone);

  if (!user) {
    throw ApiError.BadRequest('Validation error', {
      phone: 'Phone is wrong',
    });
  }

  user.fullName = fullName;

  await user.save();
}

async function updateEmail(oldEmail: string, newEmail: string) {
  const user = await getByEmail(oldEmail);

  if (!user) {
    throw ApiError.BadRequest('Validation error', {
      email: 'Email is wrong',
    });
  }

  user.email = newEmail;

  await user.save();

  return user;
}

export const userService = {
  getAll,
  normalize,
  normalizeForJwt,
  getByEmail,
  register,
  reset,
  updateName,
  updateEmail,
  getByPhone,
};
