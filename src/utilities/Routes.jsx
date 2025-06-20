import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../pages/App';
import Signup from '../pages/Signup';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [{ path: 'signup', element: <Signup /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
