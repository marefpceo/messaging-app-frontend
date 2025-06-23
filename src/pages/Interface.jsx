import { Outlet } from 'react-router';

function Interface() {
  return (
    <section className='flex flex-col h-screen'>
      <Outlet />
    </section>
  );
}

export default Interface;
