import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import BackgroundColorSelector from '../../components/BackgroundColorSelector';
import FontColorSelector from '../../components/FontColorSelector';
import FontSizeSelector from '../../components/FontSizeSelector';

function Settings() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFontColor, setSelectedFontColor] = useState('');
  const [selectedFontSize, setSelectedFontSize] = useState('');
  const [settingsChange, setSettingsChange] = useState(false);

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
          setSelectedColor(responseData.background);
          setSelectedFontColor(responseData.color);
          setSelectedFontSize(responseData.font);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getUserInfo();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>. . . Loading</p>
      ) : (
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
          <Button
            variant='contained'
            fullWidth='false'
            className='w-1/3 self-end'
          >
            Edit Bio
          </Button>

          <Divider className='my-6 bg-slate-500' />

          <div className='user-settings flex flex-col justify-between gap-4'>
            <BackgroundColorSelector
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              setSettingsChange={setSettingsChange}
              settingsChange={settingsChange}
            />
            <FontColorSelector
              selectedFontColor={selectedFontColor}
              setSelectedFontColor={setSelectedFontColor}
              setSettingsChange={setSettingsChange}
              settingsChange={settingsChange}
            />
            <FontSizeSelector
              selectedFontSize={selectedFontSize}
              setSelectedFontSize={setSelectedFontSize}
              setSettingsChange={setSettingsChange}
              settingsChange={settingsChange}
            />
          </div>

          <Button
            variant='contained'
            fullWidth='false'
            className='w-1/3 self-end'
            disabled={settingsChange === false ? true : false}
          >
            Save
          </Button>
        </section>
      )}

      <HomeNav />
    </>
  );
}

export default Settings;
