import { ReactChildren, TextAlign } from '@/utils/types';
import styles from './description.module.css';
import clsx from 'clsx';

type TextSize = 'medium' | 'large';
type TextColor = 'white' | 'grey';

interface IDescriptionProps {
  size?: TextSize;
  align?: TextAlign;
  textColor?: TextColor;
  children: ReactChildren;
  addClasses?: string;
}

const Description: React.FC<IDescriptionProps> = ({
  size = 'medium',
  align = 'left',
  textColor = 'grey',
  children,
  addClasses,
}) => {
  return (
    <p
      className={clsx(
        styles.container,
        size === 'large' && styles.largeText,
        align === 'center' && styles.centerText,
        align === 'right' && styles.rightText,
        textColor === 'white' && styles.whiteText,
        addClasses
      )}
    >
      {children}
    </p>
  );
};

export default Description;
