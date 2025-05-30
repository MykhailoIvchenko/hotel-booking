import mongoose, { Document, Schema } from 'mongoose';

export interface IPhoneVerification extends Document {
  phone: string;
  code: string;
  expiresAt: Date;
}

const phoneVerificationSchema = new Schema<IPhoneVerification>({
  phone: { type: String, required: true, unique: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

phoneVerificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model<IPhoneVerification>(
  'PhoneVerification',
  phoneVerificationSchema
);
