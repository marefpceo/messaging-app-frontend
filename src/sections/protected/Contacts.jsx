import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';

function Contacts() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className='flex-1 p-2 bg-slate-100'>
        <div className='home-header flex justify-between items-end'>
          <h2 className='text-2xl font'>Contacts</h2>
          <p>
            <i>
              <b>{user.username}</b>
            </i>
          </p>
        </div>

        <div className='homeBody min-h-full flex flex-col justify-center items-center'>
          <p>Contact lists and / or icons</p>
        </div>
      </section>
      <HomeNav />
    </>
  );
}

export default Contacts;
