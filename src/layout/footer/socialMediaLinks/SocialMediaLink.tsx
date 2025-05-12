import { ReactNode } from 'react';
import { Link } from 'react-router';
import styles from './socialMediaLink.module.css';

interface ISocialMediaLinkProps {
  icon: ReactNode;
  path: string;
}

const SocialMediaLink: React.FC<ISocialMediaLinkProps> = ({ path, icon }) => {
  return (
    <Link className={styles.container} to={path} target='_blank'>
      {icon}
    </Link>
  );
};

export default SocialMediaLink;
