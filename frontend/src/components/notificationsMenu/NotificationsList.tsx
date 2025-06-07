import { INotification } from '@/utils/types';
import NotificationItem from './NotificationItem';
import styles from './notificationsList.module.css';

interface INotificationsListProps {
  notifications: INotification[];
  handleNotificationClick: (id: string, isRead: boolean) => Promise<void>;
}

const NotificationsList: React.FC<INotificationsListProps> = ({
  notifications,
  handleNotificationClick,
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
          handleNotificationClick={() =>
            handleNotificationClick(notification.id, notification.isRead)
          }
        />
      ))}
    </ul>
  );
};

export default NotificationsList;
