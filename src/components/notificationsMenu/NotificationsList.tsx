import { INotification } from '@/utils/types';
import NotificationItem from './NotificationItem';
import styles from './notificationsList.module.css';

interface INotificationsListProps {
  notifications: INotification[];
}

const NotificationsList: React.FC<INotificationsListProps> = ({
  notifications,
}) => {
  return (
    <ul className={styles.container}>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          createdAt={notification.createdAt}
          isRead={notification.isRead}
        />
      ))}
    </ul>
  );
};

export default NotificationsList;
