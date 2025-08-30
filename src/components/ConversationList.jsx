import { useContext } from 'react';
import { Outlet } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { DateTime } from 'luxon';

function ConversationList({ conversationList }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {conversationList.map((conversation) => (
        <div className='my-8 flex justify-between' key={conversation.id}>
          <p>{conversation.subject}</p>
          <p>{`${DateTime.fromISO(conversation.createdAt).toFormat('dd LLL')}`}</p>
          <p>{`${DateTime.fromISO(conversation.createdAt).toFormat('dd LLL')}`}</p>
        </div>
      ))}
      <Outlet />
    </>
  );
}

export default ConversationList;
