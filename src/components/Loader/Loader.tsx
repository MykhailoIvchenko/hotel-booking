import clsx from 'clsx';
import styles from './loader.module.css';
import loaderGif from '@/assets/loader.gif';

type LoaderVariant = 'default' | 'small' | 'large';

interface ILoaderProps {
  variant?: LoaderVariant;
}

const Loader: React.FC<ILoaderProps> = ({ variant = 'default' }) => {
  return (
    <div className={styles.container}>
      <img
        src={loaderGif}
        alt='Loader'
        className={clsx('loader', {
          'loader--small': variant === 'small',
          'loader--large': variant === 'large',
        })}
      />
    </div>
  );
};

export default Loader;
