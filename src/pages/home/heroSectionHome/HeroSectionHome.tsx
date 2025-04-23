import Description from '@/components/description/Description';
import HeroSection from '@/components/heroSection/HeroSection';
import PageTitle from '@/components/pageTitle/PageTitle';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';

const HeroSectionHome: React.FC = () => {
  const user = useSelectUser();

  return (
    <HeroSection size={'large'}>
      <Description textColor='white'>
        Welcome {user?.name || 'Anonym'}
      </Description>
      <PageTitle>Discover the Best Destinations Across the Globe</PageTitle>
    </HeroSection>
  );
};

export default HeroSectionHome;
