import clsx from 'clsx';
import styles from './logo.module.css';
import LogoImage from '@/assets/img/logo.svg?react';
import { useNavigate } from 'react-router';
import { routerConfig } from '@/routes/config';

type LogoVariant = 'dark' | 'light';
type LogoSize = 'sm' | 'md' | 'lg';

interface ILogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
}

const Logo: React.FC<ILogoProps> = ({ variant = 'light', size = 'lg' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routerConfig.home.path);
  };

  return (
    <LogoImage
      className={clsx(
        styles.logo,
        variant === 'dark' && styles['logo--dark'],
        size === 'sm' && styles['logo--sm'],
        size === 'md' && styles['logo--md']
      )}
      onClick={handleClick}
    />
  );
};

export default Logo;
