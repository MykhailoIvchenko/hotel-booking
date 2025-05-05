import styles from './profileLinks.module.css';
import CardIcon from '@/assets/icons/card.svg?react';
import HeadPhoneIcon from '@/assets/icons/headphone.svg?react';
import CardAddIcon from '@/assets/icons/card-add.svg?react';
import WalletIcon from '@/assets/icons/wallet.svg?react';
import SettingsIcon from '@/assets/icons/setting.svg?react';
import ProfileLink from './ProfileLink';

const links = [
  {
    path: '#',
    text: 'Subscription Management',
    icon: <CardIcon />,
  },
  {
    path: '#',
    text: 'Booking History',
    icon: <WalletIcon />,
  },
  {
    path: '#',
    text: 'Concierge Services',
    icon: <HeadPhoneIcon />,
  },
  {
    path: '#',
    text: 'Payment Management',
    icon: <CardAddIcon />,
  },
  {
    path: '#',
    text: 'Settings',
    icon: <SettingsIcon />,
  },
];

const ProfileLinks: React.FC = () => {
  return (
    <ul className={styles.container}>
      {links.map((link, i) => (
        <li key={i}>
          <ProfileLink text={link.text} path={link.path} icon={link.icon} />
        </li>
      ))}
    </ul>
  );
};

export default ProfileLinks;
