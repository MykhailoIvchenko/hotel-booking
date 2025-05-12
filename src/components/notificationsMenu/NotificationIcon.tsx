import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';
import { NotificationTypes } from '@/utils/enums';
import CircleOkIcon from '@/assets//icons/tick-circle.svg?react';
import CalendarIcon from '@/assets//icons/calendar.svg?react';
import ClockIcon from '@/assets/icons/clock.svg?react';
import CloseIcon from '@/assets/icons/close-circle.svg?react';
import clsx from 'clsx';
import styles from './notificationIcon.module.css';

interface INotificationIconProps {
  type: NotificationTypes;
}

const mapIcon = {
  success: <CircleOkIcon />,
  schedule: <CalendarIcon />,
  pending: <ClockIcon />,
  reject: <CloseIcon />,
};

const NotificationIcon: React.FC<INotificationIconProps> = ({ type }) => {
  const user = useSelectUser();

  if (type === NotificationTypes.Profile) {
    return (
      <img
        src={user?.photo || avatarPlaceholder}
        alt='Avatar'
        className={styles.image}
      />
    );
  }

  return (
    <div className={clsx(styles.container, styles[type])}>{mapIcon[type]}</div>
  );
};

export default NotificationIcon;
