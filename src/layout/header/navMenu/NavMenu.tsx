import { routerConfig } from '@/routes/config';
import styles from './navMenu.module.css';
import CalendarIcon from '@/assets/icons/calendar.svg?react';
import AirplaneIcon from '@/assets/icons/airplane.svg?react';
import WhatsAppIcon from '@/assets/icons/whats-app.svg?react';
import { IMenuItem } from '@/utils/types';
import { NavLink } from 'react-router';
import clsx from 'clsx';

const menuItems: IMenuItem[] = [
  {
    id: '1',
    text: routerConfig.booking.name,
    link: routerConfig.booking.path,
    icon: <CalendarIcon />,
  },
  {
    id: '2',
    text: routerConfig.visaApplication.name,
    link: routerConfig.visaApplication.path,
    icon: <AirplaneIcon />,
  },
  {
    id: '3',
    text: routerConfig.whatsAppConcierge.name,
    link: routerConfig.whatsAppConcierge.path,
    icon: <WhatsAppIcon />,
  },
];

const NavMenu: React.FC = () => {
  return (
    <nav className={styles.container}>
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          className={({ isActive }) =>
            clsx(styles.navItem, { [styles['navItem--active']]: isActive })
          }
          to={item.link}
        >
          <span
            className={styles.icon}
            style={{
              transform:
                item.text === routerConfig.visaApplication.name
                  ? 'rotate(-45deg)'
                  : 'rotate(0deg)',
            }}
          >
            {item.icon}
          </span>
          <span>{item.text}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMenu;
