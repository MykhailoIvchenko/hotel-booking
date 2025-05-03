import Logo from '@/components/logo/Logo';
import styles from './footer.module.css';
import FooterNav from './footerNav/FooterNav';
import SocialMediaLinks from './socialMediaLinks/SocialMediaLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo variant='light' size='md' />

          <FooterNav />

          <SocialMediaLinks />
        </div>

        <div className={styles.divider} />

        <p className={styles.copyRight}>
          &copy;&nbsp;{currentYear}&nbsp;Destination Tour Leaders. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
