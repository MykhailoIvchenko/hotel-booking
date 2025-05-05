import HeroSection from '@/components/heroSection/HeroSection';
import PageTitle from '@/components/pageTitle/PageTitle';
import SearchBlock from '@/components/searchBlock/SearchBlock';
import hotelImage from '@/assets/img/header_hotel.webp';
import styles from './heroSectionBookingDetails.module.css';

interface IHeroSectionBookingDetailsProps {
  title: string;
}

const HeroSectionBookingDetails: React.FC<IHeroSectionBookingDetailsProps> = ({
  title,
}) => {
  return (
    <HeroSection size={'default'} customBackgroundImage={hotelImage}>
      <PageTitle addClasses={styles.title}>{title}</PageTitle>

      <SearchBlock addClasses={styles.searchBlock} />
    </HeroSection>
  );
};

export default HeroSectionBookingDetails;
