import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';

function Home() {
  const { user, isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  console.log(user);

  return (
    <>
      <section className='flex flex-1 flex-col p-2 bg-slate-100'>
        <div className='home-header flex justify-between items-end'>
          <h2 className='text-2xl font'>Home</h2>
          <p>
            <i>
              Welcome back <b>{user?.username}</b>
            </i>
          </p>
        </div>

        <div className='homeBody h-full flex flex-col justify-evenly items-center'>
          <div className='home-message'>
            <p>No new messages</p>
          </div>

          <div className='home-contacts'>
            <p>No new contact request</p>
          </div>
        </div>
      </section>
      <HomeNav />
    </>
  );
}

export default Home;
