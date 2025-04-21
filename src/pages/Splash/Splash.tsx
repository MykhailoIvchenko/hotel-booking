import Loader from '@/components/loader/Loader';
import styles from './splash.module.css';
import Logo from '@/components/logo/Logo';
import PageTitle from '@/components/pageTitle/PageTitle';
import Description from '@/components/description/Description';

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
