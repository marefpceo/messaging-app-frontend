import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Outlet, useLocation, useNavigate } from 'react-router';
import HomeNav from '../../components/global_components/HomeNav';
import InterfaceHeader from '../../components/global_components/InterfaceHeader';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';

function Chat() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false); // TODO Marked false for development
  const [refreshList, setRefreshList] = useState(false);

  function handleCreateNewMessage() {
    setIsMessageModalOpen(true);
  }

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <div className='flex flex-col flex-1 py-2 bg-slate-100'>
        <InterfaceHeader title={'Chat'} user={user} />

        <div
          className={`h-full ${user.settings.background} ${user.settings.font} ${user.settings.color}`}
        >
          {isLoading ? (
            <div className='flex flex-col flex-1 justify-center items-center'>
              <CircularProgress />
              <p>Loading</p>
            </div>
          ) : (
            <>
              <Outlet
                context={{
                  refreshList,
                  setRefreshList,
                  user,
                  isLoading,
                }}
              />
            </>
          )}
        </div>
      </div>

      <HomeNav />
    </>
  );
}

export default Chat;
