import { Link } from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function SignupForm({
  userSignUp,
  setUserSignUp,
  errorStatuses,
  handleChange,
  handleClick,
}) {
  const hasEmptyString = Object.values(userSignUp).some(
    (value) => typeof value === 'string' && value === '',
  );

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
            error={errorStatuses.firstname || false}
            onKeyDown={handleKeyDown}
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
            onKeyDown={handleKeyDown}
            error={errorStatuses.lastname || false}
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
            onKeyDown={handleKeyDown}
            error={errorStatuses.email || false}
          />
          <DatePicker
            format='yyyy-MM-dd'
            value={userSignUp.date_of_birth}
            onChange={(newValue) =>
              setUserSignUp({
                ...userSignUp,
                date_of_birth: newValue,
              })
            }
            name='date_of_birth'
            slotProps={{
              textField: {
                fullWidth: true,
                required: true,
                id: 'date_of_birth',
                variant: 'outlined',
                size: 'small',
                margin: 'dense',
                color: 'success',
                error: errorStatuses.date_of_birth || false,
              },
            }}
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
            onKeyDown={handleKeyDown}
            error={errorStatuses.username || false}
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
            onKeyDown={handleKeyDown}
            error={errorStatuses.password || false}
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
            onKeyDown={handleKeyDown}
            error={errorStatuses.confirmPassword || false}
          />
        </div>
        <div className='buttonDiv mt-12 mb-6 flex flex-col justify-evenly'>
          <Button
            variant='contained'
            color='primary'
            disabled={hasEmptyString}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
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
