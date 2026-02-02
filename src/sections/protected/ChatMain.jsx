import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { userListService } from '../../api/apiContactServices/contactServices';
import Avatar from '../../components/Avatar';

function ChatMain() {
  const { user } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUserList() {
      try {
        // Returns array objects for favorite users
        const serviceResponse = await userListService(user.username);

        const userListData = await serviceResponse.json();

        if (serviceResponse.ok) {
          setUserList(userListData);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUserList();
  }, [user.id]);

  return (
    <section className='h-full flex flex-col *:flex-1'>
      <div className='p-4'>
        <h3 className='text-lg'>Favorites</h3>
        <div className='flex flex-wrap justify-evenly text-black gap-3 mt-4'>
          {userList.map((entry) => (
            <Link
              key={entry.id}
              to={`/user/chat/${entry.username}`}
              state={{
                contactId: entry.id,
                contactUsername: entry.username,
              }}
            >
              <div className='mt-4 flex flex-col items-center'>
                <Avatar />
                <p className='mt-1'>{entry.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChatMain;
