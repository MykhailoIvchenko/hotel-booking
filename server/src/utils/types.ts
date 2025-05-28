import { Document } from 'mongoose';

export interface JwtUserPayload {
  id: string;
  email: string;
  role: string;
  fullName: string;
}

export interface IUser extends Document, JwtUserPayload {
  id: string;
  photo?: string;
  phone: string;
  alternatePhone?: string;
  password: string;
}
