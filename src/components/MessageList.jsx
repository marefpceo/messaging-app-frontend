import { useContext } from 'react';
import { Outlet } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { DateTime } from 'luxon';

function MessageList({ messageList }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {messageList.map((message) => (
        <div
          className='my-4 px-2 flex justify-between items-center bg-gray-200 w-full'
          key={message.id}
        >
          <p>{message.sender.username}</p>
          <p>{message.conversation.subject}</p>
          <div className='flex flex-col justify-center'>
            <p>{`${DateTime.fromISO(message.createdAt).toFormat('dd LLL')}`}</p>
            <p>{`${DateTime.fromISO(message.createdAt).toFormat('t')}`}</p>
          </div>
        </div>
      ))}
      <Outlet />
    </>
  );
}

export default MessageList;
