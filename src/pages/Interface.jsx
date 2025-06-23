import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';

function Interface() {
  return (
    <section className='flex flex-col h-screen'>
      <div className='flex-1'>Interface area</div>

      <BottomNavigation showLabels sx={{ bgcolor: 'transparent' }}>
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='Contacts' icon={<GroupIcon />} />
        <BottomNavigationAction label='Chat' icon={<ChatIcon />} />
        <BottomNavigationAction labet='Settings' icon={<SettingsIcon />} />
      </BottomNavigation>
    </section>
  );
}

export default Interface;
