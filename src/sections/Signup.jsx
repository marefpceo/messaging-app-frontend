import { Navigate } from 'react-router';
import SignupForm from '../components/SignupForm';
import SignupErrorModal from '../components/SignupErrorModal';
import { useState } from 'react';

function Signup({ isLoggedIn }) {
  const [userSignUp, setUserSignUp] = useState({
    firstname: '',
    lastname: '',
    email: '',
    date_of_birth: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [newUser, setNewUser] = useState('');

  if (isLoggedIn) {
    return <Navigate to={'/user'} replace />;
  }

  async function createNewUser() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: userSignUp.firstname,
            lastname: userSignUp.lastname,
            email: userSignUp.email,
            date_of_birth: userSignUp.date_of_birth,
            username: userSignUp.username,
            password: userSignUp.password,
            confirmPassword: userSignUp.confirmPassword,
          }),
        },
      );

      const responseData = await response.json();

      if (response.status === 400) {
        setNewUser(responseData.formData);
        setFormErrors(responseData.errors);
        setIsErrorModalOpen(true);
        console.log(newUser);
        console.log(formErrors);
      }
      if (response.status === 200) {
        setNewUser(responseData.formData);
        console.log(newUser);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setUserSignUp((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  }

  return (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <>
        <SignupForm
          userSignUp={userSignUp}
          handleChange={handleChange}
          handleClick={createNewUser}
        />

        <SignupErrorModal
          formErrors={formErrors}
          isErrorModalOpen={isErrorModalOpen}
          setIsErrorModalOpen={setIsErrorModalOpen}
        />
      </>
    </section>
  );
}

export default Signup;
