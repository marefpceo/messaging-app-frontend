import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import Avatar from '@mui/material/Avatar';
import ReplyIcon from '@mui/icons-material/Reply';

function Messages() {
  const [
    selectedConversationId,
    setSelectedConversationId,
    selectedConversation,
    setSelectedConversation,
    user,
  ] = useOutletContext();
  const senderStyle = 'self-start ';
  const recipientStyle = 'self-end flex-row-reverse';

  function getAvatarLetter(usernameInput) {
    const firstInitial = usernameInput[0].capitalize;
  }

  console.log(selectedConversation);
  return (
    <div className='mt-10 flex flex-col'>
      {selectedConversation &&
        selectedConversation.messages.map((message) => (
          <div
            key={message.id}
            className={`my-2 mx-4 p-4 max-w-3/4 flex gap-5 items-center 
            ${user.id === message.senderId ? senderStyle : recipientStyle} border border-black 
            rounded-lg `}
          >
            <Avatar>{`${message.recipient.username[0].toUpperCase()}`}</Avatar>
            <p>{message.context}</p>
          </div>
        ))}
    </div>
  );
}

export default Messages;
