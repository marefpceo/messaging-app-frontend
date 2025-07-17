import { Navigate, replace, useNavigate } from 'react-router';
import LoginForm from '../components/LoginForm';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

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
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userInput.email,
            password: userInput.password,
          }),
        },
      );

      if (response.status === 401) {
        setLoginError(true);
      }

      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate('/user', replace);
        console.log(isAuthenticated);
        console.log(user);
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
