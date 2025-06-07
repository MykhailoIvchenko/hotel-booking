import { ReactChildren } from '@/utils/types';
import styles from './dropdownMenu.module.css';

interface IDropdownMenuProps {
  children: ReactChildren;
  headerActor: ReactChildren;
  title: string;
}

const DropdownMenu: React.FC<IDropdownMenuProps> = ({
  children,
  headerActor,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.headerTitle}>{title}</h6>

        <span>{headerActor}</span>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default DropdownMenu;
