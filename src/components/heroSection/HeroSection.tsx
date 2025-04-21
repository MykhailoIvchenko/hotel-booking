import React from 'react';
import clsx from 'clsx';
import styles from './heroSection.module.css';

type Variant = 'image' | 'success' | 'danger';
type Size = 'default' | 'large';

type HeroSectionProps = {
  variant?: Variant;
  children?: React.ReactNode;
  customBackgroundImage?: string;
  size?: Size;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  variant = 'image',
  children,
  customBackgroundImage,
  size = 'default',
}) => {
  const backgroundStyle =
    variant === 'image'
      ? {
          backgroundImage: `url(${customBackgroundImage || 'balloons.webp'})`,
        }
      : {};

  const className = clsx(
    styles.hero,
    variant === 'success' && styles['hero--seccess'],
    variant === 'danger' && styles['hero--danger'],
    size === 'large' && styles['hero--expanded']
  );

  return (
    <section className={className} style={backgroundStyle}>
      {children}
    </section>
  );
};

export default HeroSection;
