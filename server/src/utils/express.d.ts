import { IUser } from './types.ts';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
