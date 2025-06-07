import { Schema, model, Document, Types } from 'mongoose';
import { IUser } from '../utils/types.js';

interface IToken extends Document {
  user: Types.ObjectId | IUser;
  refreshToken: string;
  createdAt: Date;
  expiresAt: Date;
}

const tokenSchema = new Schema<IToken>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  refreshToken: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
});

export const TokenModel = model<IToken>('Token', tokenSchema);
