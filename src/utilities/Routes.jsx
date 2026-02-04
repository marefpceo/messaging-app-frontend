import { createBrowserRouter, RouterProvider } from 'react-router';
import RootErrorBoundary from './RootErrorBoundary';
import App from '../pages/App';
import ProtectedInterface from '../pages/ProtectedInterface';
import Signup from '../sections/Signup';
import Login from '../sections/Login';
import Home from '../sections/protected/Home';
import Contacts from '../sections/protected/Contacts';
import Chat from '../sections/protected/Chat';
import Settings from '../sections/protected/Settings';
import ChatBox from '../sections/protected/ChatBox';
import ChatMain from '../sections/protected/ChatMain';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      ErrorBoundary: RootErrorBoundary,
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
                { index: true, element: <ChatMain /> },
                { path: '/user/chat/:username', element: <ChatBox /> },
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
