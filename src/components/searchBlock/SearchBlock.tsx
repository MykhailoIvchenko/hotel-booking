import clsx from 'clsx';
import styles from './searchBlock.module.css';
import SearchIcon from '@/assets/icons/search.svg?react';
import Input from '@/components/input/Input';
import FilterDropdown from './filterDropdown/FilterDropdown';

interface ISearchBlockProps {
  addClasses?: string;
}

const SearchBlock: React.FC<ISearchBlockProps> = ({ addClasses }) => {
  return (
    <div className={clsx(styles.container, addClasses)}>
      <Input
        inputIcon={<SearchIcon style={{ color: '#888E91' }} />}
        iconPosition={'left'}
        placeholder='Search by Hotel name'
        wrapperClassName={styles.searchInput}
      />

      <FilterDropdown />
    </div>
  );
};

export default SearchBlock;
