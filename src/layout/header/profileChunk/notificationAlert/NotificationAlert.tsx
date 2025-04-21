import BellIcon from '@/assets/icons/bell.svg?react';
import styles from './notificationAlert.module.css';

const NotificationAlert: React.FC = () => {
  return (
    <div className={styles.container}>
      <button type={'button'} className={styles.notificationButton}>
        <BellIcon />
      </button>

      <button type={'button'} className={styles.counterButton}>
        1
      </button>
    </div>
  );
};

export default NotificationAlert;
