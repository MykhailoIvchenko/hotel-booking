import express from 'express';
import { Routes } from '../utils/enums.js';
import { catchError } from '../middlewares/catchError.js';
import { notificationController } from '../controllers/notificationController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

export const notificationRouter = express.Router();

notificationRouter.get(
  Routes.Basic,
  catchError(authMiddleware),
  catchError(notificationController.getAllForUser)
);

notificationRouter.patch(
  Routes.ItemById,
  catchError(authMiddleware),
  catchError(notificationController.makeReadOne)
);

notificationRouter.patch(
  Routes.NotificationsMarkAllRead,
  catchError(authMiddleware),
  catchError(notificationController.makeReadAll)
);
