import { Request, Response } from 'express';
import { twilioService } from '../services/twilioService.js';

export const verificationController = {
  async sendCode(req: Request, res: Response) {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: 'Phone is required' });
    }

    try {
      await twilioService.sendVerificationCode(phone);
      res.json({ message: 'The code was sent via WhatsApp' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Message sending error' });
    }
  },

  async verifyCode(req: Request, res: Response) {
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
  },
};
