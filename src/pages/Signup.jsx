import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router';

function Signup() {
  return (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <Box
        component='div'
        className='flex flex-col p-6'
        borderRadius={3}
        boxShadow={4}
        sx={{ width: '90%' }}
      >
        <h1 className='text-2xl'>Sign up</h1>

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
          />
          <TextField
            fullWidth
            id='matchPassword'
            name='matchPassword'
            variant='outlined'
            size='small'
            margin='dense'
            label='Confirm Password'
            type='password'
            color='success'
          />
        </div>

        <div className='buttonDiv mt-12 mb-6 flex flex-col justify-evenly'>
          <Button variant='contained' color='primary'>
            Sign up
          </Button>
        </div>

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
    </section>
  );
}

export default Signup;
