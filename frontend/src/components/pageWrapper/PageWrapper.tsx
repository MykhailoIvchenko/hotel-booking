import { ReactChildren } from '@/utils/types';
import React from 'react';
import styles from './pageWrapper.module.css';

interface IPageWrapperProps {
  children: ReactChildren;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageWrapper;
