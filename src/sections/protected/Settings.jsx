import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function Settings() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/user/${user.id}/edit_profile`,
          {
            credentials: 'include',
          },
        );

        const responseData = await response.json();

        if (response.status === 200) {
          setUserInfo(responseData);
        }
        console.log(userInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getUserInfo();
    console.log(userInfo);
  }, []);

  return (
    <>
      <section className='flex flex-1 flex-col p-2 bg-slate-100'>
        <InterfaceHeader title={'Settings'} user={user} />

        <div className='user-profile flex flex-col justify-center'>
          <div className='flex justify-between items-center'>
            <Avatar sx={{ width: 100, height: 100 }} />
            <p className='mr-16 text-2xl'>
              {userInfo.firstname} {userInfo.lastname}
            </p>
          </div>
          <div className='bio my-8'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              repellat.
            </p>
          </div>
        </div>
        <Button variant='contained' fullWidth='false'>
          Edit Bio
        </Button>

        <Divider className='bg-amber-700' />
      </section>
      <HomeNav />
    </>
  );
}

export default Settings;
