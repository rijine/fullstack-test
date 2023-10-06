import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  isAllowed: boolean;
};

const ProtectedRoute = ({ isAllowed }: Props) => {
  return isAllowed ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
