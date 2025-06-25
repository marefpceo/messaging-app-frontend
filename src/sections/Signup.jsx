import { Navigate } from 'react-router';
import SignupForm from '../components/SignupForm';

function Signup({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Navigate to={'/user'} replace />;
  }

  return (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <SignupForm />
    </section>
  );
}

export default Signup;
