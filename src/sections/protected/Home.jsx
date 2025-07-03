import HomeNav from '../../components/HomeNav';
import { Outlet, useOutletContext } from 'react-router';

function Home() {
  const { user } = useOutletContext();
  console.log(user);
  return (
    <>
      <section className='flex-1'>
        <h2>Home</h2>- Design notes: Home page to display a list of new messages
      </section>
      <HomeNav />
    </>
  );
}

export default Home;
