import { Request, Response } from 'express';
import { referralService } from '../services/referralService.js';

export const referralController = {
  check: async (req: Request, res: Response) => {
    console.log("CHECK CODE");
    const { code } = req.body;

    console.log("CODE IS ", code);

    if (!code) {
      return res.status(400).json({ error: 'Referral code is required' });
    }

    const isValid = referralService.checkReferralCode(code);

    if (isValid) {
      res.json({ valid: true });
    } else {
      res.status(400).json({ valid: false, message: 'Invalid referral code' });
    }
  },
};
