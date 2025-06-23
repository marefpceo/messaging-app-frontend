import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router';

function Login() {
  return (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <Box
        component='div'
        className='flex flex-col p-6'
        borderRadius={3}
        boxShadow={4}
        sx={{ width: '90%' }}
      >
        <h1 className='text-2xl'>Login</h1>

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
          />
          <TextField
            fullWidth
            id='password'
            name='password'
            type='password'
            variant='outlined'
            size='small'
            margin='dense'
            label='Last Name'
            color='success'
          />
        </div>

        <div className='buttonDiv mt-12 mb-6 flex flex-col justify-evenly'>
          <Button variant='contained' color='primary'>
            Login
          </Button>
        </div>

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
    </section>
  );
}

export default Login;
