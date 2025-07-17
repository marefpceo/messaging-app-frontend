import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';

function Contacts() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className='flex flex-1 flex-col p-2 bg-slate-100'>
        <InterfaceHeader title={'Contacts'} user={user} />

        <div className='homeBody h-full flex flex-col justify-center items-center'>
          <p>Contact lists and / or icons</p>
        </div>
      </section>
      <HomeNav />
    </>
  );
}

export default Contacts;
