import clsx from 'clsx';
import styles from './logo.module.css';
import LogoImage from '@/assets/img/logo.svg?react';

type LogoVariant = 'dark' | 'light';
type LogoSize = 'small' | 'default';

interface ILogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
}

const Logo: React.FC<ILogoProps> = ({
  variant = 'light',
  size = 'default',
}) => {
  return (
    <LogoImage
      className={clsx(
        styles.logo,
        variant === 'dark' && styles['logo--dark'],
        size === 'small' && styles['logo--small']
      )}
    />
  );
};

export default Logo;
