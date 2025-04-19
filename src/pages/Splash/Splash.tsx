import Loader from '@/components/Loader/Loader';
import styles from './splash.module.css';
import Logo from '@/components/Logo/Logo';

const Splash: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Loader />
    </div>
  );
};

export default Splash;
