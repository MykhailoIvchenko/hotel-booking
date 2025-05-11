import Logo from '@/components/logo/Logo';
import styles from './header.module.css';
import NavMenu from './navMenu/NavMenu';
import ProfileChunk from './profileChunk/ProfileChunk';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import AuthChunk from './authChunk/AuthChunk';

const Header: React.FC = () => {
  const user = useSelectUser();

  return (
    <header className={styles.container}>
      <Logo size='md' />

      <NavMenu />

      {user ? <ProfileChunk /> : <AuthChunk />}
    </header>
  );
};

export default Header;
