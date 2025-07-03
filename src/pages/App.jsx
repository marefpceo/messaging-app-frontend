import { Outlet } from 'react-router';
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Header from '../sections/Header';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div className='flex flex-col p-2 h-svh overflow-auto'>
      <UserContext value={{ user, setUser }}>
        <Header />
        <Outlet />
      </UserContext>
    </div>
  );
}

export default App;
