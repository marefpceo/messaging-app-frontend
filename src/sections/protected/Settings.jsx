import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';

function Settings() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className='flex flex-1 flex-col p-2 bg-slate-100'>
        <InterfaceHeader title={'Settings'} user={user} />

        <div className='homeBody min-h-full flex flex-col justify-center items-center'>
          <p>User Setting icons / or individual settings</p>
        </div>
      </section>
      <HomeNav />
    </>
  );
}

export default Settings;
