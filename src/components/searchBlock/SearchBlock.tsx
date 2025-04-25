import clsx from 'clsx';
import SearchIcon from '@/assets/icons/search.svg?react';
import Input from '@/components/input/Input';
import FilterDropdown from './filterDropdown/FilterDropdown';
import Button from '@/components/button/Button';
import styles from './searchBlock.module.css';

interface ISearchBlockProps {
  addClasses?: string;
}

const SearchBlock: React.FC<ISearchBlockProps> = ({ addClasses }) => {
  return (
    <div className={clsx(styles.container, addClasses)}>
      <Input
        inputIcon={
          <SearchIcon style={{ color: '#888E91', width: 24, height: 24 }} />
        }
        iconPosition={'left'}
        placeholder='Search by Hotel name'
        wrapperClassName={styles.searchInput}
      />

      <FilterDropdown />

      <Button variant='primary' addClasses={styles.button}>
        Search
        <SearchIcon className={styles.buttonIcon} />
      </Button>
    </div>
  );
};

export default SearchBlock;
