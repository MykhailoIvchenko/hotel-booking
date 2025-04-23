import Description from '@/components/description/Description';
import HeroSection from '@/components/heroSection/HeroSection';
import PageTitle from '@/components/pageTitle/PageTitle';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import Benefits from './benefits/Benefits';
import styles from './heroSectionHome.module.css';

const HeroSectionHome: React.FC = () => {
  const user = useSelectUser();

  return (
    <HeroSection size={'large'}>
      <Description
        textColor='white'
        size='large'
        addClasses={styles.description}
      >
        Welcome {user?.name || 'Anonym'}!
      </Description>

      <PageTitle>
        Discover the Best
        <br /> Destinations Across the
        <br /> Globe
      </PageTitle>

      <Benefits />
    </HeroSection>
  );
};

export default HeroSectionHome;
