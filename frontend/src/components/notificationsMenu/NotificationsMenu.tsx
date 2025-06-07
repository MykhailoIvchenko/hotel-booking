import DropdownMenu from '../dropdownMenu/DropdownMenu';
import NotificationsTabs from './NotificationsTabs';
import NotificationsList from './NotificationsList';
import { INotification } from '@/utils/types';
import styles from './notificationsMenu.module.css';
import { NotificationTabs } from '@/utils/enums';

interface INotificationsMenuProps {
  activeTab: NotificationTabs;
  setActiveTab: React.Dispatch<React.SetStateAction<NotificationTabs>>;
  notifications: INotification[];
  makeReadAll: () => Promise<void>;
  handleNotificationClick: (id: string, isRead: boolean) => Promise<void>;
}

const NotificationsMenu: React.FC<INotificationsMenuProps> = ({
  activeTab,
  setActiveTab,
  notifications,
  makeReadAll,
  handleNotificationClick,
}) => {
  return (
    <DropdownMenu
      title='Notifications'
      headerActor={
        <button onClick={makeReadAll} className={styles.button}>
          Mark all as read
        </button>
      }
    >
      <NotificationsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        addClasses={styles.tabs}
      />

      <NotificationsList
        notifications={notifications}
        handleNotificationClick={handleNotificationClick}
      />
    </DropdownMenu>
  );
};

export default NotificationsMenu;
