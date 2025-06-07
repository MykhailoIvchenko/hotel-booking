import { useState } from 'react';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import { NotificationTabs } from '@/utils/enums';
import NotificationsTabs from './NotificationsTabs';
import NotificationsList from './NotificationsList';
import { INotification } from '@/utils/types';
import styles from './notificationsMenu.module.css';
import { useServerNotification } from '@/hooks/useServerNotifications';

const NotificationsMenu: React.FC = () => {
  const { notifications, makeReadOne, makeReadAll } = useServerNotification();

  const [activeTab, setActiveTab] = useState<NotificationTabs>(
    NotificationTabs.All
  );

  const getNotificationsToDisplay = (): INotification[] => {
    if (activeTab === NotificationTabs.All) {
      return notifications || [];
    }

    return (
      notifications?.filter((notification) => {
        const showRead = activeTab === NotificationTabs.Read;
        return notification.isRead === showRead;
      }) || []
    );
  };

  const handleNotificationClick = async (id: string, isRead: boolean) => {
    if (!isRead) {
      await makeReadOne(id);
    }
  };

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
        notifications={getNotificationsToDisplay()}
        handleNotificationClick={handleNotificationClick}
      />
    </DropdownMenu>
  );
};

export default NotificationsMenu;
