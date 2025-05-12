import styles from './guestsSelection.module.css';

interface IGuestsSelection {
  adults: number;
  children: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const GuestsSelection: React.FC<IGuestsSelection> = ({
  adults,
  children,
  setAdults,
  setChildren,
}) => {
  const incrementAdults = () => {
    setAdults((prev) => prev + 1);
  };

  const decrementAdults = () => {
    if (adults > 1) {
      setAdults((prev) => prev - 1);
    }
  };

  const incrementChildren = () => {
    setChildren((prev) => prev + 1);
  };

  const decrementChildren = () => {
    if (children > 0) {
      setChildren((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.container}>
      {/*TODO: Create a separate component for the item*/}
      <div className={styles.item}>
        <h6 className={styles.itemTitle}>Adults</h6>

        <div className={styles.counterContainer}>
          <button className={styles.button} onClick={decrementAdults}>
            -
          </button>

          <span className={styles.value}>{adults}</span>

          <button className={styles.button} onClick={incrementAdults}>
            +
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div>
          <h6 className={styles.itemTitle}>Children</h6>

          <p className={styles.itemDescription}>Age 0 - 17</p>
        </div>

        <div className={styles.counterContainer}>
          <button className={styles.button} onClick={decrementChildren}>
            -
          </button>

          <span className={styles.value}>{children}</span>

          <button className={styles.button} onClick={incrementChildren}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsSelection;
