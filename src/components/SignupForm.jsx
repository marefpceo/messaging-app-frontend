import { Link } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function SignupForm({ userSignUp, handleChange, handleClick }) {
  const hasEmptyString = Object.values(userSignUp).some(
    (value) => typeof value === 'string' && value === '',
  );

  return (
    <Box
      component='div'
      className='flex flex-col p-6'
      borderRadius={3}
      boxShadow={4}
      sx={{ width: '90%' }}
    >
      <h1 className='text-2xl'>Sign up</h1>

      <form action=''>
        <div className='inputDiv mt-4'>
          <TextField
            fullWidth
            id='firstname'
            name='firstname'
            variant='outlined'
            size='small'
            margin='dense'
            label='First Name'
            color='success'
            value={userSignUp.firstname}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id='lastname'
            name='lastname'
            variant='outlined'
            size='small'
            margin='dense'
            label='Last Name'
            color='success'
            value={userSignUp.lastname}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id='email'
            name='email'
            variant='outlined'
            size='small'
            margin='dense'
            label='Email'
            type='email'
            color='success'
            value={userSignUp.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id='date_of_birth'
            name='date_of_birth'
            variant='outlined'
            size='small'
            margin='dense'
            label='Date of Birth'
            color='success'
            value={userSignUp.date_of_birth}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id='username'
            name='username'
            variant='outlined'
            size='small'
            margin='dense'
            label='Username'
            color='success'
            value={userSignUp.username}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id='password'
            name='password'
            variant='outlined'
            size='small'
            margin='dense'
            label='Password'
            type='password'
            color='success'
            value={userSignUp.password}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id='confirmPassword'
            name='confirmPassword'
            variant='outlined'
            size='small'
            margin='dense'
            label='Confirm Password'
            type='password'
            color='success'
            value={userSignUp.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className='buttonDiv mt-12 mb-6 flex flex-col justify-evenly'>
          <Button
            variant='contained'
            color='primary'
            disabled={hasEmptyString}
            onClick={handleClick}
          >
            Sign up
          </Button>
        </div>
      </form>

      <Divider>or</Divider>

      <div className='mt-8 text-center'>
        <p>
          Already have an account? &nbsp;
          <Link to='/login' className='underline text-blue-600'>
            Login
          </Link>
        </p>
      </div>
    </Box>
  );
}

export default SignupForm;
