import { Link } from 'react-router';
import Button from '../components/Button';

// Form input base styling
const inputStyle =
  'border w-full h-10 p-2 rounded-sm focus:outline-0 focus:border-2';
// Error border
const errorBorder = 'border-red-500';
// Normal border
const normalBorder = 'border-gray-400 focus:border-lime-500';

function LoginForm({ userInput, handleChange, handleClick, loginError }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className='flex flex-col p-6  rounded-md shadow-[0_0_5px_0] text-black shadow-gray-400'>
      <h1 className='text-2xl'>Login</h1>

      <form>
        <div className='inputDiv mt-8 flex flex-col gap-8'>
          <span className='relative'>
            <label
              htmlFor='email'
              className={`absolute -top-3 left-2 px-1 bg-customGreen text-sm ${loginError ? 'text-red-500' : 'text-gray-600'}`}
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className={`${inputStyle} ${loginError === true ? errorBorder : normalBorder}`}
              autoComplete='off'
              value={userInput.email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </span>

          <span className='relative'>
            <label
              htmlFor='password'
              className={`absolute -top-3 left-2 px-1 bg-customGreen text-sm ${loginError ? 'text-red-500' : 'text-gray-600'}`}
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={userInput.password}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              autoComplete='off'
              className={`${inputStyle} ${loginError === true ? errorBorder : normalBorder}`}
            />
          </span>
        </div>

        <p
          className={`text-red-500 text-center ${loginError ? 'visible' : 'invisible'}`}
        >
          Email or password incorrect
        </p>

        <div className='buttonDiv mt-8 mb-6 flex flex-col justify-evenly'>
          <Button
            type='button'
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            settings='h-10 bg-blue-700 rounded-sm text-gray-50'
          >
            Login
          </Button>
        </div>
      </form>

      <span className='flex justify-between items-center text-gray-300'>
        <hr className='w-1/2' /> <p className='mx-3 text-black'>or</p>{' '}
        <hr className='w-1/2' />
      </span>

      <div className='mt-8 text-center'>
        <p>
          Don't have an account? &nbsp;
          <Link to='/signup' className='underline text-blue-700'>
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
