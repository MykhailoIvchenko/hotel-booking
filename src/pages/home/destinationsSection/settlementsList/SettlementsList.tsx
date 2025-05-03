import styles from './settlementsList.module.css';
import amsterdamImg from '@/assets/img/destinations/amster.webp';
import barcelonaImg from '@/assets/img/destinations/barsa.webp';
import lisbonImg from '@/assets/img/destinations/lisbon.webp';
import londonImg from '@/assets/img/destinations/london.webp';
import ottawaImg from '@/assets/img/destinations/ottawa.webp';
import parisImg from '@/assets/img/destinations/paris.webp';
import budapestImg from '@/assets/img/destinations/pest.webp';
import veniceImg from '@/assets/img/destinations/ven.webp';
import SettlementCard from './SettlementCard';

const settlements = [
  {
    id: 1,
    name: 'Venice',
    price: 101.25,
    image: veniceImg,
  },
  {
    id: 2,
    name: 'Amsterdam',
    price: 101.25,
    image: amsterdamImg,
  },
  {
    id: 3,
    name: 'Budapest',
    price: 101.25,
    image: budapestImg,
  },
  {
    id: 4,
    name: 'Lisbon',
    price: 101.25,
    image: lisbonImg,
  },
  {
    id: 5,
    name: 'London',
    price: 101.25,
    image: londonImg,
  },
  {
    id: 6,
    name: 'Ottawa',
    price: 101.25,
    image: ottawaImg,
  },
  {
    id: 7,
    name: 'Paris',
    price: 101.25,
    image: parisImg,
  },
  {
    id: 8,
    name: 'Barcelona',
    price: 101.25,
    image: barcelonaImg,
  },
];

const SettlementsList: React.FC = () => {
  return (
    <div className={styles.container}>
      {settlements.map((settlement) => (
        <SettlementCard
          key={settlement.id}
          image={settlement.image}
          title={settlement.name}
          price={settlement.price}
        />
      ))}
    </div>
  );
};

export default SettlementsList;
