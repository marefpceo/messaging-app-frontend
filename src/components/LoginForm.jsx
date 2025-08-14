import { Link } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function LoginForm({ userInput, handleChange, handleClick, loginError }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <Box
      component='div'
      className='flex flex-col p-6'
      borderRadius={3}
      boxShadow={4}
      sx={{ width: '90%' }}
    >
      <h1 className='text-2xl'>Login</h1>

      <form>
        <div className='inputDiv mt-4'>
          <TextField
            fullWidth
            id='email'
            name='email'
            type='email'
            variant='outlined'
            size='small'
            margin='dense'
            label='Email'
            color='success'
            autoComplete='email'
            value={userInput.email}
            onChange={handleChange}
            error={loginError === true ? true : false}
            onKeyDown={handleKeyDown}
          />
          <TextField
            fullWidth
            id='password'
            name='password'
            type='password'
            variant='outlined'
            size='small'
            margin='dense'
            label='Password'
            color='success'
            autoComplete='current-password'
            value={userInput.password}
            onChange={handleChange}
            error={loginError === true ? true : false}
            onKeyDown={handleKeyDown}
          />
        </div>

        {loginError === true ? (
          <p className='text-red-500 text-center'>
            Email or password incorrect
          </p>
        ) : (
          ''
        )}

        <div className='buttonDiv mt-12 mb-6 flex flex-col justify-evenly'>
          <Button
            variant='contained'
            color='primary'
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            Login
          </Button>
        </div>
      </form>

      <Divider>or</Divider>

      <div className='mt-8 text-center'>
        <p>
          Don't have an account? &nbsp;
          <Link to='/signup' className='underline text-blue-600'>
            Sign up!
          </Link>
        </p>
      </div>
    </Box>
  );
}

export default LoginForm;
