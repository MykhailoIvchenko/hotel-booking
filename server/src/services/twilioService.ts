import twilio from 'twilio';
const { Twilio } = twilio;
import PhoneVerification from '../models/PhoneVerification.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Twilio(
  process.env.TWILIO_ACCOUNT_SID as string,
  process.env.TWILIO_AUTH_TOKEN as string
);

const generateCode = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const sendVerificationCode = async (phone: string): Promise<void> => {
  const code = generateCode();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  const result = await client.messages.create({
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

const sendMessage = async (phone: string, message: string): Promise<void> => {
  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_NUMBER as string,
    to: `whatsapp:${phone}`,
    body: message,
  });
};

const verifyCode = async (phone: string, code: string): Promise<boolean> => {
  const record = await PhoneVerification.findOne({ phone });

  if (record && record.code === code && record.expiresAt > new Date()) {
    await PhoneVerification.deleteOne({ phone });
    return true;
  }

  return false;
};

export const twilioService = { sendVerificationCode, verifyCode, sendMessage };
