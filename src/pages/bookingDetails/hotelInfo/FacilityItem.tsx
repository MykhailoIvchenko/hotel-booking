import { ReactChildren } from '@/utils/types';
import styles from './facilityItem.module.css';
import { FunctionComponent, SVGProps } from 'react';

interface IFacilityItemProps {
  name: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const FacilityItem: React.FC<IFacilityItemProps> = ({ name, icon: Icon }) => {
  return (
    <li className={styles.item}>
      <span className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </span>

      <span className={styles.name}>{name}</span>
    </li>
  );
};

export default FacilityItem;
