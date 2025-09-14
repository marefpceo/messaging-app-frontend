import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { DateTime } from 'luxon';

function MessageList({
  messageList,
  isReceivedList,
  displayMessage,
  setSelectedMessageId,
}) {
  function handleSetId(id) {
    setSelectedMessageId(id);
  }

  return (
    <>
      {messageList.map((message) => (
        <div
          className='my-4 px-2 flex justify-between items-center bg-gray-200 w-full'
          key={message.id}
          id={`${message.id}`}
          onClick={() => {
            handleSetId(message.id), displayMessage();
          }}
        >
          <p>
            {isReceivedList
              ? message.sender.username
              : message.recipient.username}
          </p>
          <p>{message.conversation.subject}</p>
          <div className='flex flex-col justify-center'>
            <p>{`${DateTime.fromISO(message.createdAt).toFormat('dd LLL')}`}</p>
            <p>{`${DateTime.fromISO(message.createdAt).toFormat('t')}`}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default MessageList;
