import { ReactChildren } from '@/utils/types';
import styles from './contentSection.module.css';

interface IContentSectionProps {
  children: ReactChildren;
}

const ContentSection: React.FC<IContentSectionProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default ContentSection;
