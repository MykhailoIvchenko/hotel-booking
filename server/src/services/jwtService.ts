import jwt from 'jsonwebtoken';
import { JwtUserPayload } from '../utils/types.js';

function generateAccessToken(user: JwtUserPayload): string {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET as string, {
    expiresIn: '10m',
  });
}

function generateRefreshToken(user: JwtUserPayload): string {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: '30d',
  });
}

function validateAccessToken(token: string): JwtUserPayload | null {
  try {
    return jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    ) as JwtUserPayload;
  } catch {
    return null;
  }
}

function validateRefreshToken(token: string): JwtUserPayload | null {
  try {
    return jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET as string
    ) as JwtUserPayload;
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
