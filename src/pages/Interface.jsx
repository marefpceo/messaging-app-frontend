import { Outlet, Navigate } from 'react-router';

function Interface({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <section className='flex flex-col p-2 h-svh overflow-auto'>
      <Outlet />
    </section>
  );
}

export default Interface;
