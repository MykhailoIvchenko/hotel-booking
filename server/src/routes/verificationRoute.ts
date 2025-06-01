import express from 'express';
import { verificationController } from '../controllers/verificationController.js';
import { Routes } from '../utils/enums.js';
import { catchError } from '../middlewares/catchError.js';

const verificationRouter = express.Router();

verificationRouter.post(
  Routes.SendCode,
  catchError(verificationController.sendCode)
);
verificationRouter.post(
  Routes.VerifyCode,
  catchError(verificationController.verifyCode)
);

export default verificationRouter;
