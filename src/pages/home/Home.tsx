import DestinationsSection from './destinationsSection/DestinationsSection';
import HeroSectionHome from './heroSectionHome/HeroSectionHome';
import PromoSection from './promoSection/PromoSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSectionHome />

      <DestinationsSection />

      <PromoSection />
    </>
  );
};

export default Home;
