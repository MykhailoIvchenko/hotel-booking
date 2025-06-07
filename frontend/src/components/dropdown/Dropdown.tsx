import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import styles from './dropdown.module.css';

type MenuPosition = 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

export interface DropdownProps {
  button: ((isOpen: boolean) => ReactNode) | ReactNode;
  children: ((close: () => void) => ReactNode) | ReactNode;
  buttonClassName?: ((isOpen: boolean) => string) | string;
  bodyClassName?: string;
  dropdownClasses?: string;
  options?: {
    position?: MenuPosition;
    autoPositions?: boolean;
    insideoverflow?: boolean;
    corectionx?: boolean;
    mobileGutters?: number;
    container?: string;
  };
  closeSelf?: boolean;
  dropdownRef?: React.RefObject<HTMLElement | object>;
  handleButtonClick?: VoidFunction;
  offsetY?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  button,
  children,
  buttonClassName = '',
  bodyClassName = '',
  dropdownClasses = '',
  options = {},
  closeSelf = false,
  dropdownRef,
  handleButtonClick,
  offsetY = 0,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!ref.current || !menuRef.current) return;

    const dropdownElem = ref.current;
    const menuElem = menuRef.current;
    const {
      position = 'top-start',
      autoPositions = true,
      insideoverflow = true,
      corectionx = true,
      mobileGutters = 15,
    } = options;

    const elementRect = dropdownElem.getBoundingClientRect();
    const menuRect = menuElem.getBoundingClientRect();

    let topPos = null;
    let leftPos = null;
    let transformY = 0;
    const transformX = 0;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const guttersY = parseFloat(getComputedStyle(menuElem).marginTop) || 0;
    const widthDrop =
      menuRect.width > windowWidth - mobileGutters * 2
        ? windowWidth - mobileGutters * 2
        : menuRect.width;

    if (insideoverflow !== false) {
      topPos = elementRect.top + dropdownElem.clientHeight;
      leftPos = elementRect.left;
      if (position === 'top-end') {
        leftPos = elementRect.right - widthDrop;
      }
      if (position === 'bottom-start') {
        transformY = -(
          menuRect.height +
          dropdownElem.clientHeight +
          guttersY * 2
        );
      }
      if (position === 'bottom-end') {
        leftPos = elementRect.right - widthDrop;
        transformY = -(
          menuRect.height +
          dropdownElem.clientHeight +
          guttersY * 2
        );
      }
    }

    if (autoPositions) {
      if (
        windowHeight - elementRect.bottom - guttersY < menuRect.height &&
        elementRect.top > menuRect.height
      ) {
        transformY = -(
          menuRect.height +
          dropdownElem.clientHeight +
          guttersY * 2
        );
      } else if (
        windowHeight - elementRect.bottom - guttersY < menuRect.height &&
        elementRect.top < menuRect.height
      ) {
        transformY = 0;
        topPos =
          menuRect.height > windowHeight
            ? guttersY
            : windowHeight - menuRect.height - guttersY * 2;
      } else {
        transformY = 0;
      }
    }

    if (corectionx !== false) {
      if (
        elementRect.left + elementRect.width - mobileGutters < widthDrop &&
        (position === 'bottom-end' || position === 'top-end')
      ) {
        leftPos = mobileGutters;
      }
      if (
        windowWidth - (elementRect.left + mobileGutters) < widthDrop &&
        (position === 'top-start' || position === 'bottom-start')
      ) {
        leftPos = windowWidth - widthDrop - mobileGutters;
      }
    }

    Object.assign(menuElem.style, {
      top: `${topPos}px`,
      left: `${leftPos}px`,
      transform: `translate(${transformX}, ${transformY + offsetY}px)`,
      width: `${widthDrop}px`,
      maxWidth: `${windowWidth - mobileGutters * 2}px`,
      maxHeight: `${windowHeight - mobileGutters * 2}px`,
    });
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen, options]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    if (handleButtonClick) {
      handleButtonClick();
    }

    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (!dropdownRef) return;
    dropdownRef.current = {
      close: () => setIsOpen(false),
      open: () => setIsOpen(true),
    };
  }, [dropdownRef]);

  return (
    <div
      className={clsx(styles.dropdown, dropdownClasses, {
        [styles['dropdown--open']]: isOpen,
      })}
      ref={ref}
    >
      <button
        onClick={handleToggle}
        className={
          typeof buttonClassName === 'function'
            ? buttonClassName(isOpen)
            : buttonClassName
        }
      >
        {typeof button == 'function' ? button(isOpen) : button}
      </button>
      {isOpen &&
        createPortal(
          <div
            className={clsx(
              styles.dropdownBody,
              { 'is-open': isOpen },
              bodyClassName
            )}
            ref={menuRef}
            onClick={() => {
              if (!closeSelf) return;
              setIsOpen(false);
            }}
          >
            {typeof children === 'function'
              ? children(() => setIsOpen(false))
              : children}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Dropdown;
