import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { profileInfoService } from '../../api/apiContactServices/contactServices';
import { updateProfileService } from '../../api/apiSettingsServices/settingServices';
import HomeNav from '../../components/HomeNav';
import Button from '../../components/Button';
import InterfaceHeader from '../../components/InterfaceHeader';
import userSolidFull from '../../assets/userSolidFull.png';

function Settings() {
  const inputRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentBio, setCurrentBio] = useState('');
  const [open, setOpen] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await profileInfoService(user.id);

        const responseData = await response.json();

        if (response.status === 200) {
          setUserInfo(responseData);
          setCurrentBio(responseData.bio);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setUpdated(false);
      }
    }
    getUserInfo();
  }, [updated]);

  useEffect(() => {
    // Verifies the modal is open then apply focus on the input
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  function handleOpen() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  function handleChange(e) {
    setCurrentBio(e.target.value);
  }

  async function updateSettings() {
    try {
      handleOpen();
      const response = await updateProfileService(user.id, currentBio);

      if (response.status === 200) {
        if (open) {
          setOpen(false);
        }
        setUpdated(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {isLoading ? (
        <div className='flex flex-col flex-1 justify-center items-center self-center'>
          <p>. . . Loading</p>
        </div>
      ) : (
        <section
          className={`flex flex-1 flex-col overflow-scroll no-scrollbar p-2`}
        >
          <InterfaceHeader title={'Settings'} user={user} />

          <div className='user-profile flex flex-col justify-center'>
            <div className='mt-12 flex justify-between items-center'>
              <div className='p-5 bg-lime-400 rounded-full'>
                <img src={userSolidFull} alt='Profile avatar' width={44} />
              </div>
              <p className='mr-16 text-2xl'>
                {userInfo.firstname} {userInfo.lastname}
              </p>
            </div>
            <div className='bio my-8 bg-gray-50'>
              <input
                ref={inputRef}
                type='text'
                name='bio'
                id='bio'
                className='min-w-full p-2 focus:bg-white'
                value={currentBio}
                onChange={handleChange}
                disabled={open === true ? false : true}
              />
            </div>
          </div>
          <Button
            type={'button'}
            settings={`w-36 p-2 self-end bg-green-600 text-white rounded-lg ${open ? 'hidden' : 'block'}`}
            onClick={handleOpen}
          >
            Edit Status
          </Button>
          <Button
            type={'button'}
            settings={`w-36 p-2 self-end bg-green-600 text-white rounded-lg ${open ? 'block' : 'hidden'}`}
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
