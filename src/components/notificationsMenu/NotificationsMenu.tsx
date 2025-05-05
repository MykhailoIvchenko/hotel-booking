import { useState } from 'react';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import { NotificationTabs, NotificationTypes } from '@/utils/enums';
import NotificationsTabs from './NotificationsTabs';
import NotificationsList from './NotificationsList';
import { INotification } from '@/utils/types';
import styles from './notificationsMenu.module.css';

const notifiations: INotification[] = [
  {
    id: 1,
    createdAt: Date.now() - 40 * 1000,
    isRead: false,
    type: NotificationTypes.Profile,
    title: 'Profile Updated!',
    message: 'Your profile information has been successfully updated.',
  },
  {
    id: 2,
    createdAt: Date.now() - 250 * 1000,
    isRead: true,
    type: NotificationTypes.Success,
    title: 'Payment Successful!',
    message: 'Your payment of $158.25 for Rixos Premium Dubai JBR has been...',
  },
  {
    id: 3,
    createdAt: Date.now() - 360 * 1000,
    isRead: true,
    type: NotificationTypes.Schedule,
    title: 'Your Stay is Coming Up!',
    message: 'Reminder: Your check-in at Rixos Premium Dubai JBR',
  },
  {
    id: 4,
    createdAt: Date.now() - 480 * 1000,
    isRead: true,
    type: NotificationTypes.Success,
    title: 'Booking Confirmed!',
    message: 'Your booking at Rixos Premium Dubai JBR has been updated...',
  },
  {
    id: 5,
    createdAt: Date.now() - 600 * 1000,
    isRead: true,
    type: NotificationTypes.Pending,
    title: 'Booking Pending!',
    message: 'Your booking at Rixos Premium Dubai JBR has been updated...',
  },
  {
    id: 6,
    createdAt: Date.now() - 7800 * 1000,
    isRead: true,
    type: NotificationTypes.Reject,
    title: 'Booking Rejected!',
    message: 'Your booking at Rixos Premium Dubai JBR has been updated...',
  },
];

const NotificationsMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NotificationTabs>(
    NotificationTabs.All
  );

  const getNotificationsToDisplay = (): INotification[] => {
    if (activeTab === NotificationTabs.All) {
      return notifiations;
    }

    return notifiations.filter((notification) => {
      const showRead = activeTab === NotificationTabs.Read;
      return notification.isRead === showRead;
    });
  };

  return (
    <DropdownMenu
      title='Notifications'
      headerActor={
        <button onClick={() => {}} className={styles.button}>
          Mark all as read
        </button>
      }
    >
      <NotificationsTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        addClasses={styles.tabs}
      />

      <NotificationsList notifications={getNotificationsToDisplay()} />
    </DropdownMenu>
  );
};

export default NotificationsMenu;
