import PageSectionStandard from '@/components/pageSectionStandard/PageSectionStandard';
import SettlementsList from './settlementsList/SettlementsList';
import styles from './destinationsSection.module.css';

const DestinationsSection: React.FC = () => {
  return (
    <PageSectionStandard
      title={'Popular Destinations'}
      description={'Favorite destinations based on customer reviews'}
      addClasses={styles.container}
    >
      <SettlementsList />
    </PageSectionStandard>
  );
};

export default DestinationsSection;
