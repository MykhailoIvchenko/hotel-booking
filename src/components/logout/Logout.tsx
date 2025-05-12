import LogoutIcon from '@/assets/icons/logout.svg?react';
import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import styles from './logout.module.css';
import clsx from 'clsx';
import { usersService } from '@/services/usersService';
import { useNavigate } from 'react-router';
import { routerConfig } from '@/routes/config';

interface ILogoutProps {
  addClasses?: string;
}

const Logout: React.FC<ILogoutProps> = ({ addClasses }) => {
  const navigate = useNavigate();

  const setUser = useUserDispatch();

  const handleLogout = () => {
    setUser(null);
    usersService.logout();

    navigate(routerConfig.signIn.path);
  };

  return (
    <div className={clsx(styles.container, addClasses)} onClick={handleLogout}>
      <LogoutIcon className={styles.icon} /> <span>Logout</span>
    </div>
  );
};

export default Logout;
