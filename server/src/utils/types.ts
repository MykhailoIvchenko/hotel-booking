import { Document } from 'mongoose';
import { HotelFacilities, NotificationTypes } from './enums.js';

export interface IJwtUserPayload {
  id: string;
  email: string;
  role: string;
  fullName: string;
  phone: string;
  photo?: string;
  alternatePhone?: string;
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

export interface ILocation {
  name: string;
  latitude: number;
  longitude: number;
  description: string;
}

export interface IHotel {
  id: string;
  title: string;
  location: ILocation;
  pricePerPerson: number;
  posterUrl: string;
  photosUrl: string[];
  facilities: HotelFacilities[];
  description: string[];
}

export interface IBooking {
  id: string;
  userId: string;
  hotelId: string;
  from: string;
  to: string;
  adults: number;
  children: number;
  additionalServices: string[];
  totalPrice: number;
}

export type BookingCreateDto = Omit<IBooking, 'id'>;

export interface INotificationBasic {
  id: number;
  isRead: boolean;
  type: NotificationTypes;
  title: string;
  message: string;
}

export interface INotification extends INotificationBasic {
  createdAt: number;
}
