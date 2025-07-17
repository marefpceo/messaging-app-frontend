import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';

function Chat() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className='flex flex-col flex-1 p-2 bg-slate-100'>
        <InterfaceHeader title={'Chat'} user={user} />

        <div className='homeBody min-h-full flex flex-col justify-center items-center'>
          <p>Message main area</p>
        </div>
      </section>
      <HomeNav />
    </>
  );
}

export default Chat;
