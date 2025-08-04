import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';

function Contacts() {
  const { user } = useContext(AuthContext);
  const [contactView, setContactView] = useState('user');

  return (
    <>
      <section
        className={`flex flex-1 flex-col p-2 ${user.settings.background} ${user.settings.color} ${user.settings.font}`}
      >
        <InterfaceHeader title={'Contacts'} user={user} />

        <div className='contacts-tab mt-4 h-full'>
          <div className='tab-headers mt-4 py-2 flex justify-evenly text-center'>
            <h2 className='w-1/2'>My Contacts</h2>
            <h2 className='w-1/2'>All</h2>
          </div>
          <div className='contacts'></div>
        </div>
      </section>
      <HomeNav />
    </>
  );
}

export default Contacts;
