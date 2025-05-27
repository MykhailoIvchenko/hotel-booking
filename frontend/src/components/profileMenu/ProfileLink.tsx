import { ReactChildren } from '@/utils/types';
import { Link } from 'react-router';
import styles from './profileLink.module.css';

interface IProfileLinkProps {
  icon: ReactChildren;
  path: string;
  text: string;
}

const ProfileLink: React.FC<IProfileLinkProps> = ({ icon, path, text }) => {
  return (
    <Link to={path} className={styles.linkItem}>
      <span className={styles.icon}>{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default ProfileLink;
