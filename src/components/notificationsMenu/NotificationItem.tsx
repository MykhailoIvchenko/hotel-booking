import { NotificationTypes } from '@/utils/enums';
import NotificationIcon from './NotificationIcon';
import { helperService } from '@/services/helperService';
import clsx from 'clsx';
import styles from './notificationItem.module.css';

interface INotificationItemProps {
  type: NotificationTypes;
  title: string;
  message: string;
  createdAt: number;
  isRead: boolean;
  handleNotificationClick: VoidFunction;
}

const NotificationItem: React.FC<INotificationItemProps> = ({
  type,
  title,
  message,
  createdAt,
  isRead,
  handleNotificationClick,
}) => {
  return (
    <li
      className={clsx(styles.container, !isRead && styles.unread)}
      onClick={handleNotificationClick}
    >
      <NotificationIcon type={type} />

      <div className={styles.mainBlock}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.message}>{message}</p>
      </div>

      <span className={styles.time}>
        {helperService.getTimeTextFromCreation(createdAt)}
      </span>

      {!isRead && <span className={styles.unreadDot} />}
    </li>
  );
};

export default NotificationItem;
