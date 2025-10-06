import { useContext, useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router';
import Avatar from '@mui/material/Avatar';
import ReplyIcon from '@mui/icons-material/Reply';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { AuthContext } from '../../contexts/AuthContext';

function Messages() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [handleReplyClick, setSelectedConversationId, selectedConversation] =
    useOutletContext();
  const senderStyle = 'self-start ';
  const recipientStyle = 'self-end flex-row-reverse';

  function getAvatarLetter(usernameInput) {
    const firstInitial = usernameInput[0].capitalize;
  }

  return (
    <>
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
      <div className='absolute bottom-20 flex self-center gap-8'>
        <IconButton
          className='text-gray-700 border border-gray-200 text-md
            shadow-lg shadow-gray-600'
          onClick={() => navigate(-1)}
        >
          <NavigateBeforeIcon className='text-lime-600 text-2xl' />
        </IconButton>
        <IconButton
          className='text-gray-700 border border-gray-200 text-md
            shadow-lg shadow-gray-600'
          onClick={() => {
            setSelectedConversationId(selectedConversation.id);
            handleReplyClick();
          }}
        >
          <ReplyIcon className='text-lime-600 text-2xl' />
        </IconButton>
      </div>
    </>
  );
}

export default Messages;
