import ScrollToTop from '@/layout/components/ScrollToTop';
import ToastProvider from '@/layout/components/ToastProvider';

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';
import FallBackRender from '@/layout/ErrorBoundary/FallBackRender';

const AppLayout = () => {
  return (
    <ErrorBoundary fallbackRender={(props) => <FallBackRender {...props} />}>
      <Outlet />
      <ScrollToTop />
      <ToastProvider />
    </ErrorBoundary>
  );
};

export default AppLayout;
