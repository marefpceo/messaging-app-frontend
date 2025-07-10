import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext(false);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
          console.log(responseData);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    verifySession();

    console.log('AuthContext Triggered. Status: ' + isAuthenticated);
  }, [isAuthenticated]);

  async function logout() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/logout`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext
      value={{ isAuthenticated, setIsAuthenticated, isLoading, logout }}
    >
      {children}
    </AuthContext>
  );
}

export { AuthContext, AuthProvider };
