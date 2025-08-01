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
import EditBioModal from '../../components/EditBioModal';

function Settings() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFontColor, setSelectedFontColor] = useState('');
  const [selectedFontSize, setSelectedFontSize] = useState('');
  const [settingsChange, setSettingsChange] = useState(false);
  const [currentBio, setCurrentBio] = useState('');
  const [open, setOpen] = useState(false);
  const [updated, setUpdated] = useState(false);

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
          setCurrentBio(responseData.bio);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setUpdated(false);
      }
    }
    getUserInfo();
  }, [updated]);

  function handleOpen() {
    setOpen(true);
  }

  function handleChange(e) {
    setCurrentBio(e.target.value);
  }

  async function updateBio() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/user/${user.id}/edit_profile`,
        {
          credentials: 'include',
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bio: currentBio,
          }),
        },
      );

      if (response.status === 200) {
        setOpen(false);
        setUpdated(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function updateSettings() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/user/${user.id}/edit_profile`,
        {
          credentials: 'include',
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bio: currentBio,
            background: selectedColor,
            font: selectedFontSize,
            color: selectedFontColor,
          }),
        },
      );

      if (response.status === 200) {
        setUpdated(true);
        setSettingsChange(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <p>. . . Loading</p>
      ) : (
        <section
          className={`flex flex-1 flex-col p-2 ${selectedColor} ${selectedFontColor} ${selectedFontSize}`}
        >
          <EditBioModal
            currentBio={currentBio}
            open={open}
            setOpen={setOpen}
            updateBio={updateBio}
            handleChange={handleChange}
          />
          <InterfaceHeader title={'Settings'} user={user} />

          <div className='user-profile flex flex-col justify-center'>
            <div className='flex justify-between items-center'>
              <Avatar sx={{ width: 100, height: 100 }} />
              <p className='mr-16 text-2xl'>
                {userInfo.firstname} {userInfo.lastname}
              </p>
            </div>
            <div className='bio my-8'>
              <p>{userInfo.bio}</p>
            </div>
          </div>
          <Button
            variant='contained'
            fullWidth='false'
            className='w-1/3 self-end bg-green-600'
            onClick={handleOpen}
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
            className={`w-1/3 self-end mt-4 ${settingsChange === false ? '' : 'bg-green-600'}`}
            disabled={settingsChange === false ? true : false}
            onClick={updateSettings}
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
