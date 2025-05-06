import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import AccordionHeader from './AccordionHeader';
import styles from './accordion.module.css';

interface AccordionProps {
  header?:
    | ((
        isOpen: boolean,
        toggle: () => void,
        close: () => void,
        open: () => void
      ) => React.ReactNode)
    | React.ReactNode;
  children: React.ReactNode;
  wrapperClassName?: string;
  bodyClassName?: string;
  buttonClassName?: string;
  defaultOpen?: boolean;
  title?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  header,
  children,
  wrapperClassName,
  bodyClassName,
  buttonClassName,
  defaultOpen,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div
      className={clsx(
        styles.accordion,
        wrapperClassName,
        isOpen && styles.open
      )}
    >
      <div
        className={clsx(styles.accordionHeader, buttonClassName)}
        onClick={typeof header === 'function' ? () => {} : toggleAccordion}
      >
        {!header ? (
          <AccordionHeader
            isOpen={!!isOpen}
            toggleAccordion={toggleAccordion}
            title={title || ''}
          />
        ) : typeof header === 'function' ? (
          header(
            !!isOpen,
            toggleAccordion,
            () => setIsOpen(false),
            () => setIsOpen(true)
          )
        ) : (
          header
        )}
      </div>

      <div
        ref={contentRef}
        className={clsx(styles.accordionBody, bodyClassName)}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || 1000}px`
            : '0',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
