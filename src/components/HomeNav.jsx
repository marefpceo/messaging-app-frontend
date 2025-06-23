import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';

function HomeNav() {
  return (
    <>
      <BottomNavigation showLabels sx={{ bgcolor: 'transparent' }}>
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='Contacts' icon={<GroupIcon />} />
        <BottomNavigationAction label='Chat' icon={<ChatIcon />} />
        <BottomNavigationAction labet='Settings' icon={<SettingsIcon />} />
      </BottomNavigation>
    </>
  );
}

export default HomeNav;
