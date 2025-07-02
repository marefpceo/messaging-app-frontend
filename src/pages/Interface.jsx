import { Outlet, Navigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Interface() {
  const authData = useContext(AuthContext);

  console.log(authData.user);
  if (authData.user === null) {
    return <Navigate to={'/'} replace={true} />;
  }

  return (
    <section className='flex flex-col p-2 h-svh overflow-auto'>
      <Outlet />
    </section>
  );
}

export default Interface;
