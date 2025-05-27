import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

const buttonVariantsMap = {
  primary: styles['btn--primary'],
  default: styles['btn--default'],
  shadow: styles['btn--shadow'],
  secondary: styles['btn--secondary'],
  success: styles['btn--success'],
  danger: styles['btn--danger'],
} as const;

const buttonSizesMap = {
  sm: styles['btn--sm'],
  md: styles['btn--md'],
  lg: styles['btn--lg'],
} as const;

type ButtonSizes = keyof typeof buttonSizesMap;
type ButtonVariants = keyof typeof buttonVariantsMap;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariants;
  rounded?: boolean;
  size?: ButtonSizes;
  square?: boolean;
  addClasses?: string;
}

const Button: React.FC<IButtonProps> = ({
  size = 'md',
  variant = 'primary',
  addClasses,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.btn,
        size && buttonSizesMap[size],
        variant && buttonVariantsMap[variant],
        addClasses
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
