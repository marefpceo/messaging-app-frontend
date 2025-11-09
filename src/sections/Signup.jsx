import { Navigate, useNavigate } from 'react-router';
import SignupForm from '../components/signup_components/SignupForm';
import SignupErrorModal from '../components/signup_components/SignupErrorModal';
import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { signupService } from '../api/apiAuthServices/authServices';

function Signup() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [userSignUp, setUserSignUp] = useState({
    firstname: '',
    lastname: '',
    email: '',
    date_of_birth: null,
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [errorStatuses, setErrorStatuses] = useState({});
  const [newUserReturnData, setNewUserReturnData] = useState('');

  if (isAuthenticated) {
    return <Navigate to={'/user'} replace={true} />;
  }

  async function createNewUser() {
    try {
      const response = await signupService({ userSignUp });

      const responseData = await response.json();
      console.log(response.status);
      if (response.status === 400) {
        setNewUserReturnData(responseData);
        setFormErrors(responseData.errors);
        setIsErrorModalOpen(true);
        getErrorStatues(responseData.errors);
      }
      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate('/user', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  }

  function getErrorStatues(inputArray) {
    const newObject = {};
    inputArray.forEach((item) => {
      const key = item.path;
      newObject[key] = true;
    });

    setErrorStatuses(newObject);
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
          errorStatuses={errorStatuses}
          handleChange={handleChange}
          handleClick={createNewUser}
          setUserSignUp={setUserSignUp}
          newUserReturnData={newUserReturnData}
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
