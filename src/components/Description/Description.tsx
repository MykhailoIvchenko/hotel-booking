import { ReactChildren, TextAlign } from '@/utils/types';
import styles from './description.module.css';
import clsx from 'clsx';

type TextSize = 'medium' | 'large';

interface IDescriptionProps {
  size?: TextSize;
  align?: TextAlign;
  children: ReactChildren;
}

const Description: React.FC<IDescriptionProps> = ({
  size = 'medium',
  align = 'left',
  children,
}) => {
  return (
    <p
      className={clsx(
        styles.container,
        size === 'large' && styles.largeText,
        align === 'center' && styles.centerText,
        align === 'right' && styles.rightText
      )}
    >
      {children}
    </p>
  );
};

export default Description;
