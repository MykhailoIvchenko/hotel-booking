import LogoutIcon from '@/assets/icons/logout.svg?react';
import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import styles from './logout.module.css';
import clsx from 'clsx';

interface ILogoutProps {
  addClasses?: string;
}

const Logout: React.FC<ILogoutProps> = ({ addClasses }) => {
  const setUser = useUserDispatch();

  return (
    <div
      className={clsx(styles.container, addClasses)}
      onClick={() => setUser(null)}
    >
      <LogoutIcon className={styles.icon} /> <span>Logout</span>
    </div>
  );
};

export default Logout;
