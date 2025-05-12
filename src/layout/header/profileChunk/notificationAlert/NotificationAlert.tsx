import BellIcon from '@/assets/icons/bell.svg?react';
import Dropdown from '@/components/dropdown/Dropdown';
import NotificationsMenu from '@/components/notificationsMenu/NotificationsMenu';
import styles from './notificationAlert.module.css';

const NotificationAlert: React.FC = () => {
  return (
    <Dropdown
      options={{ position: 'top-end', autoPositions: false }}
      closeSelf={false}
      buttonClassName={styles.container}
      bodyClassName={styles.menuContainer}
      button={() => (
        <>
          <div className={styles.notificationButton}>
            <BellIcon />
          </div>

          <button type={'button'} className={styles.counterButton}>
            1
          </button>
        </>
      )}
    >
      <NotificationsMenu />
    </Dropdown>
  );
};

export default NotificationAlert;
