import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container className='flex items-start flex-col absolute top-0 mt-2'>
      <Box>
        <div>
          <p>mChat logo -- here --</p>
        </div>
        <h1>mChat Messaging</h1>
      </Box>
      <Outlet />
    </Container>
  );
}

export default App;
