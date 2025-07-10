import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function HomeNav() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <BottomNavigation showLabels sx={{ bgcolor: 'transparent' }}>
        <BottomNavigationAction href='/user' label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction
          href='/user/contacts'
          label='Contacts'
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          href='/user/chat'
          label='Chat'
          icon={<ChatIcon />}
        />
        <BottomNavigationAction
          href='/user/settings'
          label='Settings'
          icon={<SettingsIcon />}
        />
        <BottomNavigationAction
          onClick={logout}
          label='Logout'
          icon={<LogoutIcon />}
        />
      </BottomNavigation>
    </>
  );
}

export default HomeNav;
