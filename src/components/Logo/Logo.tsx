import clsx from 'clsx';
import styles from './logo.module.css';
import LogoImage from '@/assets/img/logo.svg?react';

type LogoVariant = 'dark' | 'light';
type LogoSize = 'sm' | 'md' | 'lg';

interface ILogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
}

const Logo: React.FC<ILogoProps> = ({ variant = 'light', size = 'lg' }) => {
  return (
    <LogoImage
      className={clsx(
        styles.logo,
        variant === 'dark' && styles['logo--dark'],
        size === 'sm' && styles['logo--sm'],
        size === 'md' && styles['logo--md']
      )}
    />
  );
};

export default Logo;
