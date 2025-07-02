import { Outlet } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Header from '../sections/Header';

function App() {
  const [user, setUser] = useState();

  return (
    <div className='flex flex-col p-2 h-svh overflow-auto'>
      <AuthContext value={{ user, setUser }}>
        <Header />
        <Outlet />
      </AuthContext>
    </div>
  );
}

export default App;
