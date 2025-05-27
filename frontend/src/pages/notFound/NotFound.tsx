import { routerConfig } from '@/routes/config';
import styles from './notFound.module.css';
import { Link } from 'react-router';
import HeroSection from '@/components/heroSection/HeroSection';

const NotFound: React.FC = () => {
  return (
    <>
      <HeroSection>
        <></>
      </HeroSection>

      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>

        <p className={styles.subtitle}>Page was not found</p>

        <Link to={routerConfig.home.path} className={styles.link}>
          Go home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
