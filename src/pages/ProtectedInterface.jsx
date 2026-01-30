import { useContext } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedInterface() {
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, isLoading } =
    useContext(AuthContext);

  return isLoading ? (
    <div className='flex flex-col flex-1 justify-center items-center'>
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
