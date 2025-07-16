import { Outlet, Navigate, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedInterface() {
  const location = useLocation();
  const userData = useContext(UserContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);
  const [user, setUser] = useState(userData.user, userData.setUser);

  return isLoading ? (
    <div>Loading. . . </div>
  ) : isAuthenticated ? (
    <section className='flex flex-col h-svh overflow-auto'>
      <Outlet
        context={{ user, setUser, isAuthenticated, setIsAuthenticated }}
      />
    </section>
  ) : (
    <Navigate to={'/login'} replace state={{ from: location }} />
  );
}

export default ProtectedInterface;
