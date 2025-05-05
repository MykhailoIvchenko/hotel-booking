import { ReactChildren, TextAlign } from '@/utils/types';
import clsx from 'clsx';
import styles from './pageTitle.module.css';

type TitleVariant = 'dark' | 'light';

interface IPageTitleProps {
  variant?: TitleVariant;
  children: ReactChildren;
  isSemibold?: boolean;
  align?: TextAlign;
  addClasses?: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({
  variant = 'light',
  isSemibold = false,
  align = 'center',
  children,
  addClasses,
}) => {
  return (
    <h1
      className={clsx(
        styles.title,
        variant === 'dark' && styles.dark,
        align === 'left' && styles.alignLeft,
        isSemibold && styles.semiBold,
        addClasses
      )}
    >
      {children}
    </h1>
  );
};

export default PageTitle;
