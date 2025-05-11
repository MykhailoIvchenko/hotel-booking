import { routerConfig } from '@/routes/config';
import styles from './authChunk.module.css';
import { Link } from 'react-router';
import clsx from 'clsx';

const AuthChunk: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link
        to={routerConfig.signIn.path}
        className={clsx(styles.link, styles.signIn)}
      >
        Sign In
      </Link>

      <Link
        to={routerConfig.signUp.path}
        className={clsx(styles.link, styles.signUp)}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AuthChunk;
