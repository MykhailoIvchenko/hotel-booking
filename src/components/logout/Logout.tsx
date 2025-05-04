import LogoutIcon from '@/assets/icons/logout.svg?react';
import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import styles from './logout.module.css';

const Logout: React.FC = () => {
  const setUser = useUserDispatch();

  return (
    <div className={styles.container} onClick={() => setUser(null)}>
      <LogoutIcon className={styles.icon} /> <span>Logout</span>
    </div>
  );
};

export default Logout;
