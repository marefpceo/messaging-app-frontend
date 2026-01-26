import { useNavigate } from 'react-router';
import homeIcon from '../assets/homeIcon.png';
import contactsIcon from '../assets/contactsIcon.png';
import commentsSolidFull from '../assets/commentsSolidFull.png';
import settingsIcon from '../assets/settingsIcon.png';
import logoutIcon from '../assets/logoutIcon.png';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function HomeNav() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className='h-14 px-1 pt-2 flex justify-between *:flex-col *:justify-evenly *:items-center *:text-sm *:w-1/5'>
      <div
        className='homeBtn flex'
        onClick={() => {
          navigate('/user');
        }}
      >
        <img src={homeIcon} alt='Home icon' width={27} />
      </div>

      <div
        className='contactBtn flex'
        onClick={() => {
          navigate('/user/contacts');
        }}
      >
        <img src={contactsIcon} alt='Contacts icon' width={27} />
      </div>

      <div
        className='chatBtn flex'
        onClick={() => {
          navigate('/user/chat');
        }}
      >
        <img src={commentsSolidFull} alt='Chat icon' width={27} />
      </div>

      <div
        className='settingBtn flex'
        onClick={() => {
          navigate('/user/settings');
        }}
      >
        <img src={settingsIcon} alt='Settings icon' width={27} />
      </div>

      <div className='logoutBtn flex' onClick={logout}>
        <img src={logoutIcon} alt='Logout icon' width={27} />
      </div>
    </nav>
  );
}

export default HomeNav;
