import { Document } from 'mongoose';

export interface JwtUserPayload {
  id: string;
  email: string;
  role: string;
  fullName: string;
}

export interface IUserRegistrationData {
  photo?: string;
  phone: string;
  alternatePhone?: string;
  password: string;
  email: string;
  fullName: string;
}

export interface IUser extends Document, IUserRegistrationData {
  id: string;
  recoverToken?: string | null;
  role: string;
}
