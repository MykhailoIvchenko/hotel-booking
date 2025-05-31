import express from 'express';
import { verificationController } from '../controllers/verificationController.js';
import { Routes } from '../utils/enums.js';
import { catchError } from '../middlewares/catchError.js';

const router = express.Router();

router.post(Routes.SendCode, catchError(verificationController.sendCode));
router.post(Routes.VerifyCode, catchError(verificationController.verifyCode));

export default router;
