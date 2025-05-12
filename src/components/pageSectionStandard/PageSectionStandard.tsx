import { ReactChildren } from '@/utils/types';
import styles from './pageSectionStandard.module.css';
import clsx from 'clsx';

interface IPagesSectionsStandardProps {
  title: string;
  description: string;
  addClasses?: string;
  children: ReactChildren;
}

const PageSectionStandard: React.FC<IPagesSectionsStandardProps> = ({
  title,
  description,
  addClasses,
  children,
}) => {
  return (
    <section className={clsx(styles.container, addClasses)}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      {children}
    </section>
  );
};

export default PageSectionStandard;
