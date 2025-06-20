import express from 'express';
import { authController } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { catchError } from '../middlewares/catchError.js';
import { Routes } from '../utils/enums.js';
import { verificationController } from '../controllers/verificationController.js';
import { referralController } from '../controllers/referralController.js';

export const authRouter = express.Router();

authRouter.post(Routes.SendCode, catchError(verificationController.sendCode));

authRouter.post(
  Routes.VerifyCode,
  catchError(verificationController.verifyCode)
);

authRouter.post(Routes.CheckReferral, catchError(referralController.check));

authRouter.post(Routes.Registration, catchError(authController.register));

authRouter.get(Routes.Recover, catchError(authController.recover));

authRouter.post(
  Routes.CheckRecoverToken,
  catchError(authController.checkRecoverToken)
);

authRouter.post(Routes.Reset, catchError(authController.reset));

authRouter.get(Routes.Refresh, catchError(authController.refresh));

authRouter.post(Routes.Login, catchError(authController.login));

authRouter.post(
  Routes.Logout,
  catchError(authMiddleware),
  catchError(authController.logout)
);

authRouter.post(Routes.Reauth, catchError(authController.reauth));

authRouter.post(
  Routes.ResetAuth,
  catchError(authMiddleware),
  catchError(authController.reset)
);

authRouter.get(
  Routes.Me,
  catchError(authMiddleware),
  catchError(authController.getMe)
);
