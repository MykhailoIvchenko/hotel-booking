import { NotificationTabs } from '@/utils/enums';
import styles from './notificationsTabs.module.css';
import clsx from 'clsx';

interface INotificationsTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<NotificationTabs>>;
  addClasses?: string;
}

const NotificationsTabs: React.FC<INotificationsTabsProps> = ({
  activeTab,
  setActiveTab,
  addClasses,
}) => {
  return (
    <ul className={clsx(styles.container, addClasses)}>
      {Object.entries(NotificationTabs).map(([key, value]) => (
        <li
          key={key}
          onClick={() => setActiveTab(value)}
          className={clsx(styles.item, activeTab === value && styles.active)}
        >
          {key}
        </li>
      ))}
    </ul>
  );
};

export default NotificationsTabs;
