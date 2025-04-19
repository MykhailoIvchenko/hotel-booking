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
