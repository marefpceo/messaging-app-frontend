import { Outlet } from 'react-router';
import Header from '../components/Header';

function App() {
  return (
    <div className='container flex flex-col'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
