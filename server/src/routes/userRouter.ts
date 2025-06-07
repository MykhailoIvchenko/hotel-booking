import express from 'express';
import { userController } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { catchError } from '../middlewares/catchError.js';
import { Routes } from '../utils/enums.js';

export const userRouter = express.Router();

userRouter.get(
  Routes.Basic,
  catchError(authMiddleware),
  catchError(userController.getAll)
);

userRouter.patch(
  Routes.UpdateName,
  catchError(authMiddleware),
  catchError(userController.updateName)
);

userRouter.patch(
  Routes.UpdateEmail,
  catchError(authMiddleware),
  catchError(userController.updateEmail)
);
