import { Navigate, useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { loginService } from '../api/apiAuthServices/authServices';

function Login() {
  const navigate = useNavigate();
  const { user, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState(false);

  async function login() {
    try {
      const response = await loginService(userInput.email, userInput.password);

      if (response.ok) {
        setIsAuthenticated(true);
      }
      if (response.status === 401) {
        setLoginError(true);
      }

      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate('/user', { replace: true });
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleClick() {
    if (loginError === true) {
      setLoginError(false);
    }
    login();
  }

  function handleChange(e) {
    const value = e.target.value;
    setUserInput((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  }

  return isAuthenticated ? (
    <Navigate to={'/user'} />
  ) : (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <LoginForm
        handleChange={handleChange}
        handleClick={handleClick}
        userInput={userInput}
        loginError={loginError}
      />
    </section>
  );
}

export default Login;
