import { Outlet, Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

function ProtectedInterface() {
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, isLoading } =
    useContext(AuthContext);

  return isLoading ? (
    <div className='flex flex-col flex-1 justify-center items-center'>
      <CircularProgress />
      Loading. . .
    </div>
  ) : isAuthenticated ? (
    <section className='flex flex-col h-svh overflow-auto'>
      <Outlet context={{ isAuthenticated, setIsAuthenticated }} />
    </section>
  ) : (
    <Navigate to={'/login'} replace state={{ from: location }} />
  );
}

export default ProtectedInterface;
