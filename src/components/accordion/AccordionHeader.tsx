import ArrowDownIcon from '@/assets/icons/arrow.svg?react';
import clsx from 'clsx';
import styles from './accordionHeader.module.css';

interface IAccordionHeaderProps {
  isOpen: boolean;
  toggleAccordion: VoidFunction;
  title: string;
}

const AccordionHeader: React.FC<IAccordionHeaderProps> = ({
  isOpen,
  title,
  toggleAccordion,
}) => {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>

      <button
        className={clsx(styles.button, {
          [styles.open]: isOpen,
          [styles.closed]: !isOpen,
        })}
        onClick={toggleAccordion}
      >
        <ArrowDownIcon className={styles.icon} />
      </button>
    </>
  );
};

export default AccordionHeader;
