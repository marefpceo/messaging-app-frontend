import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <div>
        <p>mChat logo -- here --</p>
      </div>
      <h1>mChat Messaging</h1>
      <Outlet />
    </>
  );
}

export default App;
