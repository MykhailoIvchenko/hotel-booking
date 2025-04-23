import { Outlet } from 'react-router';
import Header from './header/Header';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
