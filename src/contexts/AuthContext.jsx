import { createContext, useState, useEffect } from 'react';
import { logoutService } from '../api/apiAuthServices/authServices';

const AuthContext = createContext(false);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function verifySession() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/session-status`,
          {
            credentials: 'include',
          },
        );

        const responseData = await response.json();

        if (responseData.status === 'active') {
          setIsAuthenticated(true);
          if (user === null) {
            setUser(responseData.user);
            localStorage.setItem(
              'settings',
              JSON.stringify(responseData.user.settings),
            );
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    verifySession();
  }, [isAuthenticated, user]);

  async function logout() {
    try {
      const response = await logoutService();

      if (response.status === 200) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext
      value={{ isAuthenticated, setIsAuthenticated, isLoading, logout, user }}
    >
      {children}
    </AuthContext>
  );
}

export { AuthContext, AuthProvider };
