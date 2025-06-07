import { Schema, model } from 'mongoose';
import { IUser } from '../utils/types.js';

const UserSchema = new Schema<IUser>(
  {
    photo: { type: String },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    alternatePhone: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user',
    },
    recoverToken: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.password;
      },
    },
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

UserSchema.virtual('id').get(function (this: IUser) {
  return this._id.toHexString();
});

export const UserModel = model<IUser>('User', UserSchema);
