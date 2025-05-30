import express, { Request, Response } from 'express';
import { twilioService } from '../services/twilioService.js';
import { Routes } from '../utils/enums.js';

const router = express.Router();

router.post(Routes.SendCode, async (req: Request, res: Response) => {
  const { phone } = req.body;

  if (!phone) return res.status(400).json({ error: 'Phone is required' });

  try {
    await twilioService.sendVerificationCode(phone);
    res.json({ message: 'The code was sent via WhatsApp' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Message sending errorу' });
  }
});

router.post(Routes.VerifyCode, async (req: Request, res: Response) => {
  const { phone, code } = req.body;

  try {
    const isValid = await twilioService.verifyCode(phone, code);

    if (isValid) {
      res.json({ verified: true });
    } else {
      res
        .status(400)
        .json({ verified: false, message: 'Wrong or expired code' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Code verification error' });
  }
});

export default router;
