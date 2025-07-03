import { Outlet, Navigate } from 'react-router';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

function Interface() {
  const authData = useContext(UserContext);
  const [user, setUser] = useState(authData.user, authData.setUser);

  console.log(authData.user);
  if (authData.user === null) {
    return <Navigate to={'/'} replace={true} />;
  }

  return (
    <section className='flex flex-col p-2 h-svh overflow-auto'>
      <Outlet context={{ user, setUser }} />
    </section>
  );
}

export default Interface;
