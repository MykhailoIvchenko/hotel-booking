import { Twilio } from 'twilio';
import PhoneVerification from '../models/PhoneVerification.js';

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID as string,
  process.env.TWILIO_AUTH_TOKEN as string
);

const generateCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendVerificationCode = async (phone: string): Promise<void> => {
  const code = generateCode();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 хв

  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_NUMBER as string,
    to: `whatsapp:${phone}`,
    body: `Your confirmation code is: ${code}`,
  });

  await PhoneVerification.findOneAndUpdate(
    { phone },
    { code, expiresAt },
    { upsert: true, new: true }
  );
};

const verifyCode = async (phone: string, code: string): Promise<boolean> => {
  const record = await PhoneVerification.findOne({ phone });

  if (record && record.code === code && record.expiresAt > new Date()) {
    await PhoneVerification.deleteOne({ phone });
    return true;
  }

  return false;
};

export const twilioService = { sendVerificationCode, verifyCode };
