import { Outlet, Navigate, useOutletContext, useLocation } from 'react-router';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedInterface() {
  const location = useLocation();
  const userData = useContext(UserContext);
  const authStatus = useContext(AuthContext);
  const [user, setUser] = useState(userData.user, userData.setUser);
  const [isAuthenticated, setIsAuthenticated] = useState(
    authStatus.isAuthenticated,
    authStatus.setIsAuthenticated,
  );
  const { logout } = useOutletContext();

  return isAuthenticated ? (
    <section className='flex flex-col p-2 h-svh overflow-auto'>
      <Outlet
        context={{ user, setUser, isAuthenticated, setIsAuthenticated, logout }}
      />
    </section>
  ) : (
    <Navigate to={'/login'} replace state={{ from: location }} />
  );
}

export default ProtectedInterface;
