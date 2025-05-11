import styles from './guestsCounter.module.css';
import GuestsDropdown from './GuestsDropdown';

const GuestsCounter: React.FC = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}></h6>

      <GuestsDropdown />
    </div>
  );
};

export default GuestsCounter;
