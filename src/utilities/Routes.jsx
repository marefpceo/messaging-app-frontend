import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../pages/App';
import Signup from '../sections/Signup';
import Login from '../sections/Login';
import ProtectedInterface from '../pages/ProtectedInterface';
import Home from '../sections/protected/Home';
import Contacts from '../sections/protected/Contacts';
import Chat from '../sections/protected/Chat';
import Settings from '../sections/protected/Settings';
import Messages from '../sections/protected/Messages';
import Conversations from '../sections/protected/Conversations';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, Component: Login },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: '/user',
          element: <ProtectedInterface />,
          children: [
            { index: true, element: <Home /> },
            { path: 'contacts', element: <Contacts /> },
            {
              path: 'chat',
              element: <Chat />,
              children: [
                { index: true, element: <Conversations /> },
                { path: 'messages', element: <Messages /> },
              ],
            },
            { path: 'settings', element: <Settings /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
