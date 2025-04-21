import Logo from '@/components/logo/Logo';
import styles from './header.module.css';
import NavMenu from './navMenu/NavMenu';
import ProfileChunk from './profileChunk/ProfileChunk';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Logo size='small' />
      <NavMenu />
      <ProfileChunk />
    </header>
  );
};

export default Header;
