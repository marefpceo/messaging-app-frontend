import { Outlet } from 'react-router';

function Interface() {
  return (
    <section className='flex flex-col h-screen'>
      <div className='flex-1'>Interface area</div>

      <Outlet />
    </section>
  );
}

export default Interface;
