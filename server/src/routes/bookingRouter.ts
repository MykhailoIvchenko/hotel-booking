import express from 'express';
import { Routes } from '../utils/enums.js';
import { catchError } from '../middlewares/catchError.js';
import { bookingController } from '../controllers/bookingController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

export const bookingRouter = express.Router();

bookingRouter.post(
  Routes.Basic,
  catchError(authMiddleware),
  catchError(bookingController.create)
);

bookingRouter.get(
  Routes.Basic,
  catchError(authMiddleware),
  catchError(bookingController.getAll)
);

bookingRouter.get(
  Routes.ItemById,
  catchError(authMiddleware),
  catchError(bookingController.getById)
);

bookingRouter.get(
  Routes.BookingsByUser,
  catchError(authMiddleware),
  catchError(bookingController.getByUserId)
);

bookingRouter.get(
  Routes.BookingsByHotel,
  catchError(authMiddleware),
  catchError(bookingController.getByHotelId)
);
