import { Outlet } from 'react-router';
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { AuthProvider } from '../contexts/AuthContext';
import Header from '../sections/Header';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='flex flex-col p-2 h-svh overflow-auto'>
      <AuthProvider>
        <UserContext value={{ user, setUser }}>
          <Header />
          <Outlet />
        </UserContext>
      </AuthProvider>
    </div>
  );
}

export default App;
