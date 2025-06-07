import React from 'react';
import { HotelFacilities, NotificationTypes } from './enums';

export type ReactChildren = React.ReactNode | React.ReactNode[];

export type TextAlign = 'left' | 'center' | 'right';

export interface IUserBasicData {
  photo?: string;
  fullName: string;
  email: string;
  phone: string;
  alternatePhone?: string;
}

export interface IResgistrationData extends IUserBasicData {
  password: string;
}

export interface IUser extends IUserBasicData {
  id: string;
}

export interface IUserAccountData extends IUser {
  password: string;
  repeatPassword: string;
}

export interface IMenuItem {
  id: string;
  text: string;
  link: string;
  icon: React.ReactNode;
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

// export interface IHotel {
//   id: number;
//   thumbUrl: string;
//   title: string;
//   location: string;
//   price: number;
// }
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

export interface INotification {
  id: string;
  createdAt: number;
  isRead: boolean;
  type: NotificationTypes;
  title: string;
  message: string;
}

export type DateValuePiece = Date | null;

export type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece];

export interface IResponseType<T> {
  success: boolean;
  data: T;
  message?: string;
}
export interface ISignInForm {
  whatsAppNumber: string;
  password: string;
}

//#region Requests, Responses types
export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

export interface ILoginRequest {
  phone: string;
  password: string;
}

export interface IRegisterResponse {
  user: IUser;
  accessToken: string;
}
//#endregion
