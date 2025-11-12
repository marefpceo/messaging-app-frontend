import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import InterfaceHeader from '../../components/global_components/InterfaceHeader';
import NavIconButton from '../../components/global_components/NavIconButton';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Home() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <section className='flex flex-1 flex-col p-2 bg-slate-100'>
        <InterfaceHeader title={'Home'} message={'Welcome back '} user={user} />

        <div className='homeBody h-full flex flex-col justify-evenly items-center'>
          <div className='flex flex-wrap gap-8 justify-center'>
            <NavIconButton
              text={'Contacts'}
              icon={
                <GroupIcon className={'text-gray-600'} sx={{ fontSize: 60 }} />
              }
              handleClick={() => navigate('/user/contacts')}
            />
            <NavIconButton
              text={'Chat'}
              icon={
                <ChatIcon className={'text-gray-600'} sx={{ fontSize: 60 }} />
              }
              handleClick={() => navigate('/user/chat')}
            />
            <NavIconButton
              text={'Settings'}
              icon={
                <SettingsIcon
                  className={'text-gray-600'}
                  sx={{ fontSize: 60 }}
                />
              }
              handleClick={() => navigate('/user/settings')}
            />
            <NavIconButton
              text={'Logout'}
              icon={
                <LogoutIcon className={'text-gray-600'} sx={{ fontSize: 60 }} />
              }
              handleClick={logout}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
