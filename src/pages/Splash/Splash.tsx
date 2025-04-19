import Loader from '@/components/Loader/Loader';
import styles from './splash.module.css';
import Logo from '@/components/Logo/Logo';
import PageTitle from '@/components/PageTitle/PageTitle';
import Description from '@/components/Description/Description';

const Splash: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Loader />
      <div>
        <PageTitle>
          Get Ready for New <br /> Adventures
        </PageTitle>

        <Description size='large' align='center'>
          Pack your things and make more memories Outdoor
        </Description>
      </div>
    </div>
  );
};

export default Splash;
