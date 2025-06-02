import ScrollToTop from '@/layout/components/ScrollToTop';
import ToastProvider from '@/layout/components/toastProvider/ToastProvider';

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';
import FallBackRender from '@/layout/errorBoundary/FallBackRender';
import { useSelectIsLoading } from '@/redux/hooks/selectHooks/useSelectIsLoading';
import useIsLoadingDispatch from '@/redux/hooks/dispatchHooks/useIsLoadingDispatch';
import { useEffect } from 'react';
import Splash from '@/pages/splash/Splash';
import { useCheckAuth } from '@/hooks/useCheckAuth';

const AppLayout = () => {
  // const isLoading = useSelectIsLoading();
  const setIsLoading = useIsLoadingDispatch();

  useCheckAuth();

  // const mockLoading = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // };

  // useEffect(() => {
  //   mockLoading();
  // }, []);

  return (
    <ErrorBoundary fallbackRender={(props) => <FallBackRender {...props} />}>
      {/* {isLoading ? <Splash /> : <Outlet />} */}
      <Outlet />
      <ScrollToTop />
      <ToastProvider />
    </ErrorBoundary>
  );
};

export default AppLayout;
