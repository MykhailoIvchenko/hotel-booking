import DestinationsSection from './destinationsSection/DestinationsSection';
import HeroSectionHome from './heroSectionHome/HeroSectionHome';
import PromoSection from './promoSection/PromoSection';
import TopHotelsSection from './topHotelsSection/TopHotelsSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSectionHome />

      <DestinationsSection />

      <PromoSection />

      <TopHotelsSection />
    </>
  );
};

export default Home;
