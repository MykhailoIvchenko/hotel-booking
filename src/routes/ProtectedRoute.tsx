import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import { Navigate, Outlet } from 'react-router';
import { routerConfig } from './config';

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = routerConfig.signIn.path,
  children,
}) => {
  const user = useSelectUser();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
