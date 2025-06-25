import { Navigate } from 'react-router';
import LoginForm from '../components/LoginForm';

function Login({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Navigate to={'/user'} replace />;
  }

  return (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <LoginForm />
    </section>
  );
}

export default Login;
