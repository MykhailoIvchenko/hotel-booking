import NotificationAlert from './notificationAlert/NotificationAlert';
import styles from './profileChunk.module.css';
import ProfileDropdown from './profileDropdown/profileDropdown';

const ProfileChunk: React.FC = () => {
  return (
    <div className={styles.container}>
      <NotificationAlert />
      <ProfileDropdown />
    </div>
  );
};

export default ProfileChunk;
