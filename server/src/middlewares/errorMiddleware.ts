import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../exceptions/ApiError.js';

export function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });
    return;
  }

  res.status(500).send({ message: 'Unexpected error' });
}
