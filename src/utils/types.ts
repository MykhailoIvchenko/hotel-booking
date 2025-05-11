import React from 'react';
import { NotificationTypes } from './enums';

export type ReactChildren = React.ReactNode | React.ReactNode[];

export type TextAlign = 'left' | 'center' | 'right';

export interface IUser {
  id: string;
  photo: string;
  fullName: string;
  email: string;
  phone: string;
  alternatePhone: string;
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
