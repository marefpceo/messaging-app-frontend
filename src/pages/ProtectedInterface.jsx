import { Outlet, Navigate } from 'react-router';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedInterface() {
  const userData = useContext(UserContext);
  const authStatus = useContext(AuthContext);
  const [user, setUser] = useState(userData.user, userData.setUser);
  const [isAuthenticated, setIsAuthenticated] = useState(
    authStatus.isAuthenticated,
    authStatus.setIsAuthenticated,
  );

  if (!isAuthenticated) {
    return <Navigate to={'/'} replace={true} />;
  }

  return (
    <section className='flex flex-col p-2 h-svh overflow-auto'>
      <Outlet
        context={{ user, setUser, isAuthenticated, setIsAuthenticated }}
      />
    </section>
  );
}

export default ProtectedInterface;
