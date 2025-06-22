import { Outlet } from 'react-router';
import Header from '../sections/Header';

function App() {
  return (
    <div className='flex flex-col p-2 h-full'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
