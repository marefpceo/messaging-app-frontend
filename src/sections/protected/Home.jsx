import { useContext, useEffect, useState } from 'react';
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
  const [userSettings, setUserSettings] = useState();

  useEffect(() => {
    if (localStorage.length === 0) {
      return;
    }
    setUserSettings({ ...JSON.parse(localStorage.getItem('settings')) });
    console.log(userSettings);
  }, [user]);

  return (
    <>
      {/* TODO stuck on loading after creating new user */}
      {!userSettings ? (
        <p>Loading. . . </p>
      ) : (
        <section className={`flex flex-1 flex-col p-2 `}>
          <InterfaceHeader
            title={'Home'}
            message={'Welcome back '}
            c
            user={user}
          />

          <div
            className={`homeBody h-full flex flex-col justify-evenly items-center ${userSettings.background} ${userSettings.color} ${userSettings.font}`}
          >
            <div className='flex flex-wrap gap-8 justify-center'>
              <NavIconButton
                text={'Contacts'}
                icon={
                  <GroupIcon
                    className={'text-gray-600'}
                    sx={{ fontSize: 60 }}
                  />
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
                  <LogoutIcon
                    className={'text-gray-600'}
                    sx={{ fontSize: 60 }}
                  />
                }
                handleClick={logout}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Home;
