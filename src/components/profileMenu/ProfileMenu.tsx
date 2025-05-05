import DropdownMenu from '../dropdownMenu/DropdownMenu';
import CrossIcon from '@/assets/icons/close.svg?react';
import ProfileShortInfo from './ProfileShortInfo';
import Logout from '../logout/Logout';
import ProfileLinks from './ProfileLinks';
import styles from './profileMenu.module.css';

interface IProfileMenuProps {
  handleClose: VoidFunction;
}

const ProfileMenu: React.FC<IProfileMenuProps> = ({ handleClose }) => {
  return (
    <DropdownMenu
      title='My Account'
      headerActor={
        <CrossIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
      }
    >
      <ProfileShortInfo />

      <ProfileLinks />

      <Logout addClasses={styles.logout} />
    </DropdownMenu>
  );
};

export default ProfileMenu;
