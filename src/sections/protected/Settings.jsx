import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import Divider from '@mui/material/Divider';

function Settings() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className='flex flex-1 flex-col p-2 bg-slate-100'>
        <InterfaceHeader title={'Settings'} user={user} />

        <div className='user-profile h-full flex flex-col justify-center items-center'>
          <p>User Setting icons / or individual settings</p>
        </div>

        <Divider className='bg-amber-700' />
      </section>
      <HomeNav />
    </>
  );
}

export default Settings;
