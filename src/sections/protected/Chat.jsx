import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Outlet, useLocation, useNavigate } from 'react-router';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';

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

  // TODO Starter idea for layout would be to have the user's favorites as icons and once clicked,
  // it will send them to the chat page. In a div under the favorites, a dropdown can be used to
  // a message to any user from the global list
  return (
    <>
      <div className='flex flex-col flex-1'>
        <InterfaceHeader title={'Chat'} user={user} />

        <div
          className={`h-full ${user.settings.background} ${user.settings.font} ${user.settings.color}`}
        >
          {isLoading ? (
            <div className='flex flex-col flex-1 justify-center items-center'>
              <p>Loading...</p>
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
