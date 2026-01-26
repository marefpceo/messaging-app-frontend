import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import homeIcon from '../../assets/homeIcon.png';
import contactsIcon from '../../assets/contactsIcon.png';
import commentsSolidFull from '../../assets/commentsSolidFull.png';
import settingsIcon from '../../assets/settingsIcon.png';
import logoutIcon from '../../assets/logoutIcon.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function HomeNav() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <BottomNavigation showLabels sx={{ bgcolor: 'transparent' }}>
        <BottomNavigationAction
          href='/user'
          label='Home'
          icon={<img src={homeIcon} alt='Home icon' width={24} />}
        />
        <BottomNavigationAction
          href='/user/contacts'
          label='Contacts'
          icon={<img src={contactsIcon} alt='Home icon' width={24} />}
        />
        <BottomNavigationAction
          href='/user/chat'
          label='Chat'
          icon={<img src={commentsSolidFull} alt='Home icon' width={24} />}
        />
        <BottomNavigationAction
          href='/user/settings'
          label='Settings'
          icon={<img src={settingsIcon} alt='Home icon' width={24} />}
        />
        <BottomNavigationAction
          onClick={logout}
          label='Logout'
          icon={<img src={logoutIcon} alt='Home icon' width={24} />}
        />
      </BottomNavigation>
    </>
  );
}

export default HomeNav;
