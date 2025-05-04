import DropdownMenu from '../dropdownMenu/DropdownMenu';
import CrossIcon from '@/assets/icons/close.svg?react';
import ProfileShortInfo from './ProfileShortInfo';
import Logout from '../logout/Logout';

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

      <Logout />
    </DropdownMenu>
  );
};

export default ProfileMenu;
