import BellIcon from '@/assets/icons/bell.svg?react';
import Dropdown from '@/components/dropdown/Dropdown';
import NotificationsMenu from '@/components/notificationsMenu/NotificationsMenu';
import styles from './notificationAlert.module.css';
import { useServerNotification } from '@/hooks/useServerNotifications';
import { NotificationTabs } from '@/utils/enums';
import { useMemo, useState } from 'react';
import { INotification } from '@/utils/types';

const NotificationAlert: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NotificationTabs>(
    NotificationTabs.All
  );

  const { notifications, makeReadOne, makeReadAll } = useServerNotification();

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

  const unreadNotifications = useMemo(
    () => notifications?.filter((notification) => !notification.isRead),
    [notifications]
  );

  const handleReadAll = async () => {
    if (!unreadNotifications?.length || unreadNotifications.length === 0) {
      return;
    }

    await makeReadAll();
  };

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

          {!!unreadNotifications?.length && unreadNotifications.length > 0 && (
            <span
              className={styles.counterButton}
              onClick={() => setActiveTab(NotificationTabs.Unread)}
            >
              {unreadNotifications.length}
            </span>
          )}
        </>
      )}
    >
      <NotificationsMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        notifications={getNotificationsToDisplay()}
        handleNotificationClick={handleNotificationClick}
        makeReadAll={handleReadAll}
      />
    </Dropdown>
  );
};

export default NotificationAlert;
