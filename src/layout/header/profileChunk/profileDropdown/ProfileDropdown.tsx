import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import avatarPlaceholder from '@/assets/img/avatar-placeholder.webp';
import ArrowIcon from '@/assets/icons/arrow.svg?react';
import Dropdown from '@/components/dropdown/Dropdown';
import styles from './profileDropdown.module.css';
import clsx from 'clsx';
import ProfileMenu from '@/components/profileMenu/ProfileMenu';

const ProfileDropdown: React.FC = () => {
  const user = useSelectUser();

  return (
    <Dropdown
      options={{ position: 'top-end', autoPositions: false }}
      closeSelf={true}
      buttonClassName={styles.button}
      bodyClassName={styles.menuContainer}
      button={(isOpen) => (
        <>
          <img
            src={user?.photo || avatarPlaceholder}
            className={styles.avatar}
            alt='Avatar'
          />

          <span className={styles.name}>{user?.fullName || 'Anonym'}</span>

          <ArrowIcon
            className={clsx(styles.arrow, isOpen && styles['arrow--open'])}
          />
        </>
      )}
    >
      <ProfileMenu handleClose={() => {}} />
    </Dropdown>
  );
};

export default ProfileDropdown;
