import ScrollToTop from '@/layout/components/ScrollToTop';
import ToastProvider from '@/layout/components/toastProvider/ToastProvider';

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';
import FallBackRender from '@/layout/errorBoundary/FallBackRender';
import { useCheckAuth } from '@/hooks/useCheckAuth';

const AppLayout = () => {
  useCheckAuth();

  return (
    <ErrorBoundary fallbackRender={(props) => <FallBackRender {...props} />}>
      <Outlet />
      <ScrollToTop />
      <ToastProvider />
    </ErrorBoundary>
  );
};

export default AppLayout;
