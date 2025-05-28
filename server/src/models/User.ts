import { Schema, model } from 'mongoose';
import { IUser } from '../utils/types.js';

const UserSchema = new Schema<IUser>(
  {
    photo: { type: String },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    alternatePhone: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual('id').get(function (this: IUser) {
  return this._id.toHexString();
});

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.password;
  },
});

export const UserModel = model<IUser>('User', UserSchema);
