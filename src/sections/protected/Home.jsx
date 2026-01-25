import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import InterfaceHeader from '../../components/global_components/InterfaceHeader';
import NavIconButton from '../../components/global_components/NavIconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faComments,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

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
      <section className={`flex flex-1 flex-col p-2 `}>
        <InterfaceHeader
          title={'Home'}
          message={'Welcome back '}
          c
          user={user}
        />

        <div
          className={`homeBody h-full flex flex-col justify-evenly items-center`}
        >
          <div className='flex flex-wrap gap-12 justify-center'>
            <NavIconButton
              text={'Contacts'}
              icon={
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className='text-gray-600'
                  size='2x'
                />
              }
              handleClick={() => navigate('/user/contacts')}
            />
            <NavIconButton
              text={'Chat'}
              icon={
                <FontAwesomeIcon
                  icon={faComments}
                  className={'text-gray-600'}
                  size='2x'
                />
              }
              handleClick={() => navigate('/user/chat')}
            />
            <NavIconButton
              text={'Settings'}
              icon={
                <FontAwesomeIcon
                  icon={faGear}
                  className={'text-gray-600'}
                  size='2x'
                />
              }
              handleClick={() => navigate('/user/settings')}
            />
            <NavIconButton
              text={'Logout'}
              icon={
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className={'text-gray-600'}
                  size='2x'
                />
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
