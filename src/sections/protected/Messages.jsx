import { useContext, useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router';
import Avatar from '@mui/material/Avatar';
import ReplyIcon from '@mui/icons-material/Reply';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import { AuthContext } from '../../contexts/AuthContext';

function Messages() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [
    handleReplyClick,
    setSelectedConversationId,
    selectedConversation,
    setRefreshList,
  ] = useOutletContext();
  const senderStyle = 'justify-start ';
  const recipientStyle = 'just-end flex-row-reverse';
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  const [messageIdList, setMessageIdList] = useState([]);

  function getAvatarLetter(usernameInput) {
    const firstInitial = usernameInput[0].capitalize;
  }

  async function deleteMessage() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/message/delete`,
        {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            conversationId: selectedConversation.id,
            messageIdList,
            userId: `${user.id}`,
          }),
        },
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleDeleteClick() {
    if (showDeleteButtons === false) {
      setShowDeleteButtons(true);
    } else {
      deleteMessage();
      console.log('delete messages');
    }
  }

  function handleCancelDelete() {
    setShowDeleteButtons(false);
  }

  function handleChange(e) {
    const isChecked = e.target.checked;

    if (!isChecked) {
      setMessageIdList(messageIdList.filter((a) => a.id !== e.target.value));
    } else {
      setMessageIdList([...messageIdList, e.target.value]);
    }
  }

  return (
    <>
      <div className='message-div mt-10 flex flex-col'>
        {selectedConversation &&
          selectedConversation.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${user.id === message.senderId ? senderStyle : recipientStyle} 
               ${user.id !== message.senderId && showDeleteButtons ? 'mr-12' : ''}`}
            >
              <div
                className={`my-2 mx-4 p-4 max-w-3/4 flex gap-5 items-center 
                 border border-black ${user.id === message.senderId ? 'flex-row' : 'flex-row-reverse'}
                rounded-lg `}
              >
                <Avatar>{`${message.recipient.username[0].toUpperCase()}`}</Avatar>
                <p>{message.context}</p>
              </div>
              <div
                className={`${!showDeleteButtons ? 'hidden' : ''} self-center absolute right-4`}
              >
                <Checkbox
                  value={message.id}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon color='error' />}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
      </div>
      <div className='absolute bottom-20 flex self-center gap-8'>
        <IconButton
          className={`text-gray-700 border border-gray-200 text-md
            shadow-lg shadow-gray-600 ${showDeleteButtons ? 'hidden' : ''}`}
          onClick={() => navigate(-1)}
        >
          <NavigateBeforeIcon className='text-lime-600 text-2xl' />
        </IconButton>
        <IconButton
          className={`text-gray-700 border border-gray-200 text-md
            shadow-lg shadow-gray-600 ${showDeleteButtons ? 'hidden' : ''}`}
          onClick={() => {
            setSelectedConversationId(selectedConversation.id);
            handleReplyClick();
          }}
        >
          <ReplyIcon className='text-lime-600 text-2xl' />
        </IconButton>
        <IconButton
          className='text-gray-700 border border-gray-200 text-md
            shadow-lg shadow-gray-600'
          onClick={handleDeleteClick}
        >
          <DeleteIcon color='error' />
        </IconButton>
        <IconButton
          className={`text-gray-700 border border-gray-200 text-md
            shadow-lg shadow-gray-600 ${showDeleteButtons ? '' : 'hidden'}`}
          onClick={handleCancelDelete}
        >
          <ClearIcon />
        </IconButton>
      </div>
    </>
  );
}

export default Messages;
