import HeroSection from '@/components/heroSection/HeroSection';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';

const Home: React.FC = () => {
  const user = useSelectUser();

  return (
    <>
      <HeroSection size={'large'}>
        
      </HeroSection>
    </>
  );
};

export default Home;
