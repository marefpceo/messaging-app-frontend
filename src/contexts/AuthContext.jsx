import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext(false);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function verifySession() {
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
    }
    verifySession();

    console.log('Test effect AuthContext');
    console.log(isAuthenticated);
  });

  return (
    <AuthContext value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext>
  );
}

export { AuthContext, AuthProvider };
