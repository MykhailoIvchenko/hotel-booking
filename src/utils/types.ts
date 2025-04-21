import React from 'react';

export type ReactChildren = React.ReactNode | React.ReactNode[];

export type TextAlign = 'left' | 'center' | 'right';

export interface IUser {
  id: string;
  photo: string;
  name: string;
  email: string;
  phone: string;
  alternatePhone: string;
}

export interface IMenuItem {
  id: string;
  text: string;
  link: string;
  icon: React.ReactNode;
}
