import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';
import homeIcon from '../assets/homeIcon.png';
import contactsIcon from '../assets/contactsIcon.png';
import commentsSolidFull from '../assets/commentsSolidFull.png';
import settingsIcon from '../assets/settingsIcon.png';
import logoutIcon from '../assets/logoutIcon.png';

const buttonStyle =
  'flex rounded-full hover:cursor-pointer hover:bg-customLimeAccent/50 hover:scale-75';

function HomeNav() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className='h-14 px-1 pt-2 flex justify-between *:flex-col *:justify-evenly *:items-center *:text-sm *:w-1/5'>
      <div
        className={`homeBtn ${buttonStyle}`}
        onClick={() => {
          navigate('/user');
        }}
      >
        <img src={homeIcon} alt='Home icon' width={27} />
      </div>

      <div
        className={`contactBtn ${buttonStyle}`}
        onClick={() => {
          navigate('/user/contacts');
        }}
      >
        <img src={contactsIcon} alt='Contacts icon' width={27} />
      </div>

      <div
        className={`chatBtn ${buttonStyle}`}
        onClick={() => {
          navigate('/user/chat');
        }}
      >
        <img src={commentsSolidFull} alt='Chat icon' width={27} />
      </div>

      <div
        className={`settingBtn ${buttonStyle}`}
        onClick={() => {
          navigate('/user/settings');
        }}
      >
        <img src={settingsIcon} alt='Settings icon' width={27} />
      </div>

      <div className={`logoutBtn ${buttonStyle}`} onClick={logout}>
        <img src={logoutIcon} alt='Logout icon' width={27} />
      </div>
    </nav>
  );
}

export default HomeNav;
