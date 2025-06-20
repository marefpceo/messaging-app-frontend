import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../pages/App';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: 'signup', element: <Signup /> },
        { path: 'login', element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
