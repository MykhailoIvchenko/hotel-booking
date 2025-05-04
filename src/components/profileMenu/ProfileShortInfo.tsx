import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import avatarImg from '@/assets/img/avatar-placeholder.webp';
import { Link } from 'react-router';
import styles from './profileShortInfo.module.css';

const ProfileShortInfo: React.FC = () => {
  const user = useSelectUser();

  return (
    <div className={styles.container}>
      <img src={user?.photo || avatarImg} alt='Avatar' />

      <div className={styles.content}>
        <div>
          <h6 className={styles.title}>{user?.fullName || 'Anonym'}</h6>
          <p className={styles.email}>{user?.email || 'email@example.com'}</p>
        </div>

        <div className={styles.links}>
          <Link to={'#'} className={styles.linkColored}>
            View Profile
          </Link>

          <Link to={'#'}>Edit Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileShortInfo;
