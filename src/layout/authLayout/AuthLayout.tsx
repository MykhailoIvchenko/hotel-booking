import { Outlet } from 'react-router';
import styles from './authLayout.module.css';
import Logo from '@/components/logo/Logo';
import PageTitle from '@/components/pageTitle/PageTitle';
import Description from '@/components/description/Description';

const AuthLayout: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.posterBlock}>
        <div className={styles.posterBlockItem}>
          <Logo variant='dark' size='md' />
        </div>

        <div className={styles.posterBlockItem}>
          <PageTitle align='left' isSemibold>
            Explore, Plan, & Discover with{' '}
            <span className={styles.coloredText}>Ease!</span>
          </PageTitle>

          <Description addClasses={styles.description}>
            Unleash your wanderlust with our intuitive trip planner app.
            Organize trips, uncover hidden gems, and create lasting memories
            effortlessly.
          </Description>
        </div>
      </section>

      <section className={styles.formBlock}>
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;
