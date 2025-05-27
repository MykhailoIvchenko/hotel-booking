import { Outlet, useNavigate } from 'react-router';
import styles from './authLayout.module.css';
import Logo from '@/components/logo/Logo';
import PageTitle from '@/components/pageTitle/PageTitle';
import Description from '@/components/description/Description';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import { useEffect } from 'react';
import { routerConfig } from '@/routes/config';

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  const user = useSelectUser();

  useEffect(() => {
    if (user) {
      navigate(routerConfig.home.path);
    }
  }, []);

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
