import LogoutIcon from '@/assets/icons/logout.svg?react';
import clsx from 'clsx';
import { useLogout } from '@/hooks/useLogout';
import styles from './logout.module.css';

interface ILogoutProps {
  addClasses?: string;
}

const Logout: React.FC<ILogoutProps> = ({ addClasses }) => {
  const { logoutUser } = useLogout();

  return (
    <div className={clsx(styles.container, addClasses)} onClick={logoutUser}>
      <LogoutIcon className={styles.icon} /> <span>Logout</span>
    </div>
  );
};

export default Logout;
