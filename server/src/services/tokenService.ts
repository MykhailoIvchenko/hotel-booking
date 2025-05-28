import { Types } from 'mongoose';
import { TokenModel } from '../models/Token.js';

async function save(
  userId: Types.ObjectId,
  refreshToken: string,
  expiresAt: Date
): Promise<void> {
  const token = await TokenModel.findOne({ user: userId });

  if (token) {
    token.refreshToken = refreshToken;
    token.expiresAt = expiresAt;
    await token.save();
    return;
  }

  await TokenModel.create({ user: userId, refreshToken, expiresAt });
}

async function getByToken(refreshToken: string) {
  return TokenModel.findOne({ refreshToken });
}

async function remove(userId: Types.ObjectId) {
  return TokenModel.deleteOne({ user: userId });
}

export const tokenService = {
  save,
  getByToken,
  remove,
};
