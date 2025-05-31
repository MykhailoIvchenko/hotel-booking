import express from 'express';
import { referralController } from '../controllers/referralController.js';
import { catchError } from '../middlewares/catchError.js';
import { Routes } from '../utils/enums.js';

const router = express.Router();

router.post(Routes.CheckReferral, catchError(referralController.check));

export default router;
