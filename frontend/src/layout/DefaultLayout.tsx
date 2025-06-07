import { Outlet } from 'react-router';
import Header from './header/Header';
import Footer from './footer/Footer';
import ContactButton from '@/components/contactButton/ContactButton';

const DefaultLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <ContactButton />

      <Footer />
    </div>
  );
};

export default DefaultLayout;
