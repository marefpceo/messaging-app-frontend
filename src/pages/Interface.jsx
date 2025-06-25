import { Outlet, Navigate } from 'react-router';
import Header from '../sections/Header';

function Interface({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <section className='flex flex-col p-2 h-svh overflow-auto'>
      <Header />
      <Outlet />
    </section>
  );
}

export default Interface;
