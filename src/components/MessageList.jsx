import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { DateTime } from 'luxon';
import { Link } from 'react-router';

function MessageList({ messageList, isReceivedList }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {messageList.map((message) => (
        <Link key={message.id}>
          <div className='my-4 px-2 flex justify-between items-center bg-gray-200 w-full'>
            <p>
              {isReceivedList === true
                ? message.sender.username
                : message.recipient.username}
            </p>
            <p>{message.conversation.subject}</p>
            <div className='flex flex-col justify-center'>
              <p>{`${DateTime.fromISO(message.createdAt).toFormat('dd LLL')}`}</p>
              <p>{`${DateTime.fromISO(message.createdAt).toFormat('t')}`}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default MessageList;
