import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Outlet } from 'react-router';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';

function Chat() {
  const { user } = useContext(AuthContext);
  const [refreshList, setRefreshList] = useState(false);

  return (
    <>
      <div className='flex flex-col flex-1'>
        <InterfaceHeader title={'Chat'} user={user} />

        <div className={`h-full`}>
          <>
            <Outlet
              context={{
                refreshList,
                setRefreshList,
                user,
              }}
            />
          </>
        </div>
      </div>

      <HomeNav />
    </>
  );
}

export default Chat;
