import { Link, Navigate } from 'react-router';
import SignupForm from '../components/SignupForm';
import { useState } from 'react';

function Signup({ isLoggedIn }) {
  const [userSignUp, setUserSignUp] = useState({
    firstname: '',
    lastname: '',
    email: '',
    date_of_birth: '',
    username: '',
    password: '',
    matchPassword: '',
  });

  if (isLoggedIn) {
    return <Navigate to={'/user'} replace />;
  }

  function handleChange(e) {
    const value = e.target.value;
    setUserSignUp((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
    console.log(userSignUp);
  }

  return (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <SignupForm userSignUp={userSignUp} handleChange={handleChange} />
    </section>
  );
}

export default Signup;
