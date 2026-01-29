import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router';
import SignupForm from '../components/SignupForm';
import SignupErrorModal from '../components/SignupErrorModal';
import { AuthContext } from '../contexts/AuthContext';
import { signupService } from '../api/apiAuthServices/authServices';

const newUserObject = {
  firstname: '',
  lastname: '',
  email: '',
  date_of_birth: '',
  username: '',
  password: '',
  confirmPassword: '',
};

// Takes newUserObject and sets values to false before passing to SignupForm.jsx
function initializeErrorStatus() {
  const keys = Object.keys(newUserObject);
  const falseEntries = keys.map((key) => [key, false]);
  const updatedObject = Object.fromEntries(falseEntries);
  return updatedObject;
}

function Signup() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [userSignUp, setUserSignUp] = useState(newUserObject);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [newUserReturnData, setNewUserReturnData] = useState('');
  const [errorStatus, setErrorStatus] = useState(initializeErrorStatus);

  if (isAuthenticated) {
    return <Navigate to={'/user'} replace={true} />;
  }

  // Reset errorStatus and update based on returned errors (if any)
  function updateErrorStatus(errorInputs) {
    // Create new object from errorStatus and resetting to false
    const allFalse = Object.keys(errorStatus).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // Merge previous errorStatus to preserve any errors that were not cleared
    setErrorStatus((prevStatus) => {
      const newStatus = {
        ...prevStatus,
        ...allFalse,
      };

      // Checks new errorInputs, if any, and set errorStatus values to true for matching keys
      Object.keys(errorInputs).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(prevStatus, key)) {
          newStatus[key] = true;
        } else {
          newStatus[key] = false;
        }
      });
      return newStatus;
    });
  }

  // Creates a new user from SignupForm.
  async function createNewUser() {
    try {
      const response = await signupService({ userSignUp });

      console.log(response.status);
      const responseData = await response.json();
      if (response.status === 400) {
        // setErrorStatus(initializeErrorStatus);
        setNewUserReturnData(responseData);
        setFormErrors(responseData.errors);
        setIsErrorModalOpen(true);
        updateErrorStatus(responseData.errors);
      }
      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate('/user', { replace: true });
      }
    } catch (error) {
      console.log(error);
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
    <section className='mt-10 flex flex-col flex-1 items-center justify-start res'>
      <>
        <SignupForm
          userSignUp={userSignUp}
          formErrors={formErrors}
          handleChange={handleChange}
          handleClick={createNewUser}
          setUserSignUp={setUserSignUp}
          newUserReturnData={newUserReturnData}
          errorStatus={errorStatus}
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
