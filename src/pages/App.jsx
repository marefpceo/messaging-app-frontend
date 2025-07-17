import { Outlet } from 'react-router';
import { AuthProvider } from '../contexts/AuthContext';
import Header from '../sections/Header';

function App() {
  return (
    <div className='flex flex-col h-svh overflow-auto'>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </div>
  );
}

export default App;
