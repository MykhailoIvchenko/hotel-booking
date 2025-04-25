import React from 'react';
import Dropdown from '@/components/dropdown/Dropdown';
import styles from './filterDropdown.module.css';
import FilterIcon from '@/assets/icons/filter.svg?react';
import ArrowIcon from '@/assets/icons/arrow.svg?react';
import clsx from 'clsx';

const FilterDropdown: React.FC = () => {
  return (
    <Dropdown
      options={{ position: 'top-end', autoPositions: false }}
      closeSelf={true}
      buttonClassName={styles.button}
      bodyClassName={styles.menuContainer}
      button={(isOpen) => (
        <>
          <FilterIcon className={styles.icon} />

          <span>Filter</span>

          <ArrowIcon
            className={clsx(styles.icon, isOpen && styles['icon--rotated'])}
          />
        </>
      )}
    >
      <ul className={styles.menu}>
        {['Filter One', 'Filter Two'].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default FilterDropdown;
