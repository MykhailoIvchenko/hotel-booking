import { ReactChildren } from '@/utils/types';
import styles from './pageSectionStandard.module.css';

interface IPagesSectionsStandardProps {
  title: string;
  description: string;
  children: ReactChildren;
}

const PageSectionStandard: React.FC<IPagesSectionsStandardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      {children}
    </section>
  );
};

export default PageSectionStandard;
