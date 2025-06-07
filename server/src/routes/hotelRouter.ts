import express from 'express';
import { Routes } from '../utils/enums.js';
import { catchError } from '../middlewares/catchError.js';
import { hotelController } from '../controllers/hotelController.js';

export const hotelRouter = express.Router();

hotelRouter.get(Routes.Basic, catchError(hotelController.getAll));

hotelRouter.get(Routes.ItemById, catchError(hotelController.getById));
