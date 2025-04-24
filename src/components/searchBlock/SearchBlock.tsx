import clsx from 'clsx';
import styles from './searchBlock.module.css';

interface ISearchBlockProps {
  addClasses?: string;
}

const SearchBlock: React.FC<ISearchBlockProps> = ({ addClasses }) => {
  return <div className={clsx(styles.container, addClasses)}></div>;
};

export default SearchBlock;
