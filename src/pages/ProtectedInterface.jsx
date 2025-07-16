import { Outlet, Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedInterface() {
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, isLoading } =
    useContext(AuthContext);

  return isLoading ? (
    <div>Loading. . . </div>
  ) : isAuthenticated ? (
    <section className='flex flex-col h-svh overflow-auto'>
      <Outlet context={{ isAuthenticated, setIsAuthenticated }} />
    </section>
  ) : (
    <Navigate to={'/login'} replace state={{ from: location }} />
  );
}

export default ProtectedInterface;
