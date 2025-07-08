import { Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { AuthContext } from '../contexts/AuthContext';
import Header from '../sections/Header';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkSession() {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/session-status`,
      );
      const responseData = response.json();

      setUser(responseData.user);
      setIsAuthenticated(responseData.status === 'active' ? true : false);
    }
    checkSession();
  }, []);

  console.log(user);
  return (
    <div className='flex flex-col p-2 h-svh overflow-auto'>
      <AuthContext value={{ isAuthenticated, setIsAuthenticated }}>
        <UserContext value={{ user, setUser }}>
          <Header />
          <Outlet />
        </UserContext>
      </AuthContext>
    </div>
  );
}

export default App;
