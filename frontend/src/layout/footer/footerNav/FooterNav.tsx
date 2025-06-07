import { Fragment } from 'react/jsx-runtime';
import { routerConfig } from '@/routes/config';
import styles from './footerNav.module.css';
import { NavLink } from 'react-router';

const links = [
  {
    text: 'Home',
    path: routerConfig.home.path,
  },
  {
    text: 'Booking',
    path: '#',
  },
  {
    text: 'Visa Application',
    path: '#',
  },
  {
    text: 'Subscription',
    path: '#',
  },
];

const FooterNav: React.FC = () => {
  return (
    <nav className={styles.container}>
      {links.map((link, i) => (
        <Fragment key={i}>
          <NavLink to={link.path} className={styles.item}>
            {link.text}
          </NavLink>

          {i !== links.length - 1 && <div className={styles.divider} />}
        </Fragment>
      ))}
    </nav>
  );
};

export default FooterNav;
