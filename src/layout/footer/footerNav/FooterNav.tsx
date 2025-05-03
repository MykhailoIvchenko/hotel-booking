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
    path: routerConfig.booking.path,
  },
  {
    text: 'Visa Application',
    path: routerConfig.visaApplication.path,
  },
  {
    text: 'Subscription',
    path: routerConfig.subscription.path,
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
