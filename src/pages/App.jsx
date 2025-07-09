import { Outlet } from 'react-router';
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { AuthProvider } from '../contexts/AuthContext';
import Header from '../sections/Header';

function App() {
  const [user, setUser] = useState(null);
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
      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='flex flex-col p-2 h-svh overflow-auto'>
      <AuthProvider>
        <UserContext value={{ user, setUser }}>
          <Header />
          <Outlet context={{ logout }} />
        </UserContext>
      </AuthProvider>
    </div>
  );
}

export default App;
