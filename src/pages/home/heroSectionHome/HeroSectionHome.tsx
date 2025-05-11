import Description from '@/components/description/Description';
import HeroSection from '@/components/heroSection/HeroSection';
import PageTitle from '@/components/pageTitle/PageTitle';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import Benefits from './benefits/Benefits';
import styles from './heroSectionHome.module.css';
import SearchBlock from '@/components/searchBlock/SearchBlock';
import { helperService } from '@/services/helperService';

const HeroSectionHome: React.FC = () => {
  const user = useSelectUser();

  return (
    <HeroSection size={'large'}>
      <Description
        textColor='white'
        size='large'
        addClasses={styles.description}
      >
        Welcome{' '}
        {user?.fullName
          ? helperService.getNameFromFullName(user.fullName)
          : 'Anonym'}
        !
      </Description>

      <PageTitle>
        Discover the Best
        <br /> Destinations Across the
        <br /> Globe
      </PageTitle>

      <Benefits />

      <SearchBlock addClasses={styles.searchBlock} />
    </HeroSection>
  );
};

export default HeroSectionHome;
