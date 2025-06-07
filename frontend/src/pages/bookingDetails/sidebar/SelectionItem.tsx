import { ReactChildren } from '@/utils/types';
import styles from './selectionCounter.module.css';

interface ISelectionItem {
  title: string;
  children: ReactChildren;
}

const SelectionItem: React.FC<ISelectionItem> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>{title}</h6>

      {children}
    </div>
  );
};

export default SelectionItem;
