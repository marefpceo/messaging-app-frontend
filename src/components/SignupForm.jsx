import { useState } from 'react';
import { Link } from 'react-router';
import Button from './Button';

function SignupForm({
  userSignUp,
  setUserSignUp,
  errorStatuses,
  handleChange,
  handleClick,
}) {
  const [inputType, setInputType] = useState('text');
  const hasEmptyString = Object.values(userSignUp).some(
    (value) => typeof value === 'string' && value === '',
  );

  console.log(hasEmptyString);

  const inputStyle =
    'border w-full h-10 p-2 rounded-sm border-gray-400 focus:outline-0 focus:border-lime-500 focus:border-2';
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  function handleDate(e) {
    const date = e.target.value;

    setUserSignUp({
      ...userSignUp,
      date_of_birth: date,
    });
  }

  function handleFocus() {
    setInputType('date');
  }

  function handleBlur() {
    if (userSignUp.date_of_birth === '') {
      setInputType('text');
    }
  }

  return (
    <div className='flex flex-col w-11/12 p-6 rounded-2xl shadow-gray-400/50 shadow-[0_0_8px_0px]'>
      <h1 className='text-2xl'>Sign up</h1>

      <form>
        <div className='inputDiv mt-4 flex flex-col gap-2'>
          <input
            type='text'
            name='firstname'
            id='firstname'
            value={userSignUp.firstname}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='First Name'
            className={`${inputStyle}`}
          />

          <input
            type='text'
            name='lastname'
            id='lastname'
            value={userSignUp.lastname}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='Last Name'
            className={`${inputStyle}`}
          />

          <input
            type='email'
            name='email'
            id='email'
            value={userSignUp.email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='Email'
            className={`${inputStyle}`}
          />

          <input
            type={inputType}
            name='date_of_birth'
            id='date_of_birth'
            value={userSignUp.date_of_birth}
            onChange={handleDate}
            className={`${inputStyle}`}
            placeholder='Date of Birth'
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          <input
            type='text'
            name='username'
            id='username'
            value={userSignUp.username}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='Username'
            className={`${inputStyle}`}
          />

          <input
            type='password'
            name='password'
            id='password'
            value={userSignUp.password}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='Password'
            autoComplete='off'
            className={`${inputStyle}`}
          />

          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            value={userSignUp.confirmPassword}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='Confirm Password'
            autoComplete='off'
            className={`${inputStyle}`}
          />
        </div>
        <div className='buttonDiv mt-12 mb-6 flex flex-col justify-evenly'>
          <Button
            disabled={hasEmptyString}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            settings={'w-full h-8 bg-gray-300 rounded-sm'}
            type={'button'}
          >
            SIGN UP
          </Button>
        </div>
      </form>

      <span className='flex justify-between items-center text-gray-300'>
        <hr className='w-1/2' /> <p className='mx-3 text-black'>or</p>{' '}
        <hr className='w-1/2' />
      </span>

      <div className='mt-8 text-center'>
        <p>
          Already have an account? &nbsp;
          <Link to='/login' className='underline text-blue-600'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
