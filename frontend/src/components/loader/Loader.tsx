import clsx from 'clsx';
import loaderGif from '@/assets/img/loader.gif';
import styles from './loader.module.css';

type LoaderVariant = 'default' | 'tiny' | 'small' | 'large';

interface ILoaderProps {
  variant?: LoaderVariant;
}

const Loader: React.FC<ILoaderProps> = ({ variant = 'default' }) => {
  return (
    <div className={styles.container}>
      <img
        src={loaderGif}
        alt='Loader'
        className={clsx(
          styles.loader,
          variant === 'tiny' && styles['loader--tiny'],
          variant === 'small' && styles['loader--small'],
          variant === 'large' && styles['loader--large']
        )}
      />
    </div>
  );
};

export default Loader;
