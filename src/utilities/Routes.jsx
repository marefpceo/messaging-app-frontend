import { createBrowserRouter, RouterProvider } from 'react-router';
import { useState } from 'react';
import App from '../pages/App';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Interface from '../pages/Interface';
import Home from '../sections/Home';
import Contacts from '../sections/Contacts';
import Chat from '../sections/Chat';
import Settings from '../sections/Settings';

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, Component: Login },
        { path: 'signup', element: <Signup isLoggedIn={isLoggedIn} /> },
        { path: 'login', element: <Login isLoggedIn={isLoggedIn} /> },
      ],
    },
    {
      path: '/user',
      element: <Interface isLoggedIn={isLoggedIn} />,
      children: [
        { index: true, element: <Home /> },
        { path: 'contacts', element: <Contacts /> },
        { path: 'chat', element: <Chat /> },
        { path: 'settings', element: <Settings /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
