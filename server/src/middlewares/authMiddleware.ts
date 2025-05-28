import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError.js';
import { jwtService } from '../services/jwtService.js';
import { JwtUserPayload } from '../utils/types.js';

export interface AuthRequest extends Request {
  user?: JwtUserPayload;
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    throw ApiError.Unauthorized();
  }

  const [, accessToken] = authHeader.split(' ');

  if (!accessToken) {
    throw ApiError.Unauthorized();
  }

  const userData = jwtService.validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorized();
  }

  next();
}
