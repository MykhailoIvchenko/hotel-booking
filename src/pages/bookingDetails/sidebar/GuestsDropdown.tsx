import Dropdown from '@/components/dropdown/Dropdown';
import { useState } from 'react';
import PersonIcon from '@/assets/icons/person-icon.svg?react';
import ArrowDownIcon from '@/assets/icons/arrow.svg?react';
import clsx from 'clsx';
import GuestsSelection from './GuestsSelection';
import styles from './guestsDropdown.module.css';

const GuestsDropdown: React.FC = () => {
  const [adultsCount, setAdultsCount] = useState<number>(1);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  return (
    <Dropdown
      options={{ position: 'top-start', autoPositions: false }}
      closeSelf={false}
      buttonClassName={styles.button}
      bodyClassName={styles.menuContainer}
      button={() => (
        <>
          {/*The similar button is for date (it makes sense to create a component)*/}
          <div className={styles.main}>
            <PersonIcon className={clsx(styles.icon, styles.pale)} />

            <p className={styles.info}>
              <span>
                {adultsCount} Adult{adultsCount > 1 && 's'}
              </span>

              {childrenCount ? (
                <span>
                  ,&nbsp;
                  {childrenCount > 1
                    ? `${childrenCount} Children`
                    : `${childrenCount} Child`}
                </span>
              ) : (
                ''
              )}
            </p>
          </div>

          <ArrowDownIcon className={clsx(styles.icon, styles.dark)} />
        </>
      )}
    >
      <GuestsSelection
        adults={adultsCount}
        children={childrenCount}
        setAdults={setAdultsCount}
        setChildren={setChildrenCount}
      />
    </Dropdown>
  );
};

export default GuestsDropdown;
