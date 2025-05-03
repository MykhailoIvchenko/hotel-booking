import { Outlet } from 'react-router';
import Header from './header/Header';
import Footer from './footer/Footer';

const DefaultLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
