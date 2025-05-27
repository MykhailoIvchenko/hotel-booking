import { Link } from 'react-router';
import styles from './breadCrumbs.module.css';

interface BreadcrumbsProps {
  crumbs: {
    name: string;
    to: string;
  }[];
  current: string;
  base?: string;
}

function Breadcrumbs({ base = '', crumbs = [], current }: BreadcrumbsProps) {
  if (!crumbs.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={`${base}${crumb.to}`}>{crumb.name}</Link>

          {' / '}
        </span>
      ))}

      <span className={styles.current}>{current}</span>
    </div>
  );
}

export default Breadcrumbs;
