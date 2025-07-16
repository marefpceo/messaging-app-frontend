import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';

function Home() {
  const { user, isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  console.log(user);

  return (
    <>
      <section className='flex-1 p-2 bg-slate-100'>
        <div className='home-header flex justify-between items-end'>
          <h2 className='text-2xl font'>Home</h2>
          <p>
            <i>
              Welcome back <b>{user.username}</b>
            </i>
          </p>
        </div>

        <div className='homeBody min-h-full flex flex-col justify-center items-center'>
          <p>No new messages</p>
        </div>
      </section>
      <HomeNav />
    </>
  );
}

export default Home;
