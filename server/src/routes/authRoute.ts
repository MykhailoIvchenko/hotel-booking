import express from 'express';
import { authController } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { catchError } from '../middlewares/catchError.js';
import { Routes } from '../utils/enums.js';

export const authRouter = express.Router();

authRouter.post(Routes.Registration, catchError(authController.register));

authRouter.get(Routes.Recover, catchError(authController.recover));

authRouter.get(
  Routes.Me,
  catchError(authMiddleware),
  catchError(authController.getMe)
);

authRouter.post(
  Routes.CheckRecoverToken,
  catchError(authController.checkRecoverToken)
);

authRouter.post(Routes.Reset, catchError(authController.reset));

authRouter.post(
  Routes.ResetAuth,
  catchError(authMiddleware),
  catchError(authController.reset)
);

authRouter.post(Routes.Login, catchError(authController.login));
authRouter.post(Routes.Logout, catchError(authController.logout));
authRouter.get(Routes.Refresh, catchError(authController.refresh));
authRouter.post(Routes.Reauth, catchError(authController.reauth));
