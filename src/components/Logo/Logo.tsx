import clsx from 'clsx';
import styles from './logo.module.css';
import LogoImage from '@/assets/img/logo.svg?react';

type LogoVariant = 'dark' | 'light';

interface ILogoProps {
  variant?: LogoVariant;
}

const Logo: React.FC<ILogoProps> = ({ variant = 'light' }) => {
  return (
    <LogoImage
      className={clsx(styles.logo, variant === 'dark' && styles['logo--dark'])}
    />
  );
};

export default Logo;
