import clsx from 'clsx';
import SearchIcon from '@/assets/icons/search.svg?react';
import Input from '@/components/input/Input';
import FilterDropdown from './filterDropdown/FilterDropdown';
import Button from '@/components/button/Button';
import styles from './searchBlock.module.css';

interface ISearchBlockProps {
  addClasses?: string;
  isShrinked?: boolean;
  showFiltersButton?: boolean;
}

const SearchBlock: React.FC<ISearchBlockProps> = ({
  isShrinked = false,
  addClasses,
  showFiltersButton = true,
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        isShrinked && styles['container--shrinked'],
        addClasses
      )}
    >
      <Input
        inputIcon={
          <SearchIcon style={{ color: '#888E91', width: 24, height: 24 }} />
        }
        iconPosition={'left'}
        placeholder='Search by Hotel name'
        wrapperClassName={styles.searchInput}
      />

      {showFiltersButton && <FilterDropdown />}

      <Button variant='primary' addClasses={styles.button}>
        Search
        <SearchIcon className={styles.buttonIcon} />
      </Button>
    </div>
  );
};

export default SearchBlock;
