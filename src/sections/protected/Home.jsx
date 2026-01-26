import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import InterfaceHeader from '../../components/InterfaceHeader';
import NavIconButton from '../../components/NavIconButton';
import addressBookSolidFull from '../../assets/addressBookSolidFull.png';
import arrowRightSolidFull from '../../assets/arrowRightSolidFull.png';
import commentsSolidFull from '../../assets/commentsSolidFull.png';
import gearSolidFull from '../../assets/gearSolidFull.png';

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
                <img
                  src={addressBookSolidFull}
                  alt='Address book link'
                  width={44}
                />
              }
              handleClick={() => navigate('/user/contacts')}
            />
            <NavIconButton
              text={'Chat'}
              icon={
                <img
                  src={commentsSolidFull}
                  alt='Address book link'
                  width={44}
                />
              }
              handleClick={() => navigate('/user/chat')}
            />
            <NavIconButton
              text={'Settings'}
              icon={
                <img src={gearSolidFull} alt='Address book link' width={44} />
              }
              handleClick={() => navigate('/user/settings')}
            />
            <NavIconButton
              text={'Logout'}
              icon={
                <img
                  src={arrowRightSolidFull}
                  alt='Address book link'
                  width={44}
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
