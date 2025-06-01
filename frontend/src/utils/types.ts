import React from 'react';
import { NotificationTypes } from './enums';

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

export interface IHotel {
  id: number;
  thumbUrl: string;
  title: string;
  location: string;
  price: number;
}

export interface INotification {
  id: number;
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

//#region Requests, Responses types
export interface IAuthResponse {
  accessToken: string;
}

export interface ILoginRequest {
  phone: string;
  password: string;
}
//#endregion
