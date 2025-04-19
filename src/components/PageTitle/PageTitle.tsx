import { ReactChildren } from '@/utils/types';
import styles from './pageTitle.module.css';
import clsx from 'clsx';

type TitleVariant = 'dark' | 'light';

interface IPageTitleProps {
  variant?: TitleVariant;
  children: ReactChildren;
}

const PageTitle: React.FC<IPageTitleProps> = ({
  variant = 'light',
  children,
}) => {
  return (
    <h1 className={clsx(styles.title, variant === 'dark' && styles.titleDark)}>
      {children}
    </h1>
  );
};

export default PageTitle;
