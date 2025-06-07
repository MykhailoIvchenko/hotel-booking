import jwt from 'jsonwebtoken';
import { IJwtUserPayload } from '../utils/types.js';

function generateAccessToken(user: IJwtUserPayload): string {
  
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET as string, {
    expiresIn: '10m',
  });
}

function generateRefreshToken(user: IJwtUserPayload): string {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: '30d',
  });
}

function validateAccessToken(token: string): IJwtUserPayload | null {
  try {
    return jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    ) as IJwtUserPayload;
  } catch {
    return null;
  }
}

function validateRefreshToken(token: string): IJwtUserPayload | null {
  try {
    return jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET as string
    ) as IJwtUserPayload;
  } catch {
    return null;
  }
}

export const jwtService = {
  generateAccessToken,
  generateRefreshToken,
  validateAccessToken,
  validateRefreshToken,
};
