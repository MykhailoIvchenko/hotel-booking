import HeroSection from '@/components/heroSection/HeroSection';
import Header from './header/Header';

const DefaultLayout = () => {
  return (
    <div>
      <HeroSection size={'large'}>
        <Header />
      </HeroSection>
    </div>
  );
};

export default DefaultLayout;
