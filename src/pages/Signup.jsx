import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material';

function Signup() {
  return (
    <section className='mt-10 flex flex-col flex-1 items-center justify-start'>
      <Box component='div' className='flex flex-col' sx={{ width: '80%' }}>
        <h2 className='mb-2 text-2xl text-center'>Sign Up</h2>

        <div className='inputDiv'>
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

        <Button variant='contained'>Sumbit</Button>
      </Box>
    </section>
  );
}

export default Signup;
