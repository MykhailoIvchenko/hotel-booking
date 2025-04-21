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
}

const Description: React.FC<IDescriptionProps> = ({
  size = 'medium',
  align = 'left',
  textColor = 'grey',
  children,
}) => {
  return (
    <p
      className={clsx(
        styles.container,
        size === 'large' && styles.largeText,
        align === 'center' && styles.centerText,
        align === 'right' && styles.rightText,
        textColor === 'white' && styles.whiteText
      )}
    >
      {children}
    </p>
  );
};

export default Description;
