import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import CreateMessageModal from '../../components/CreateMessageModal';
import MessageList from '../../components/MessageList';
import CircularProgress from '@mui/material/CircularProgress';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const apiHeader = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

function Chat() {
  const { user } = useContext(AuthContext);
  const matches = useMediaQuery('(max-width:600px)');
  const [isLoading, setIsLoading] = useState(true);
  const [messageList, setMessageList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/messages`,
          apiHeader,
        );

        const responseData = await response.json();

        if (response.ok) {
          setMessageList(responseData);
          console.log(responseData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMessages();
  }, []);

  function handleCreateNewMessage() {
    setOpen(true);
  }

  return (
    <>
      <CreateMessageModal open={open} setOpen={setOpen} />
      <div className='flex flex-col flex-1 py-2 bg-slate-100'>
        <InterfaceHeader title={'Chat'} user={user} />

        {isLoading ? (
          <div className='flex flex-col flex-1 justify-center items-center'>
            <CircularProgress />
            <p>Loading</p>
          </div>
        ) : (
          <div className='homeBody mt-8 min-h-full flex flex-col justify-start  items-center'>
            {messageList.length === 0 ? (
              <p>No Messages</p>
            ) : (
              <div className='min-w-full'>
                <MessageList messageList={messageList} />
              </div>
            )}
          </div>
        )}
      </div>

      {matches ? (
        <IconButton
          className='absolute right-4 bottom-20 text-gray-700 border border-gray-200 text-md 
            shadow-lg shadow-gray-600'
          onClick={handleCreateNewMessage}
        >
          <ChatBubbleIcon className='text-lime-600 text-2xl' />
        </IconButton>
      ) : (
        <Button
          variant='outlined'
          startIcon={<ChatBubbleIcon className='text-lime-600 text-2xl' />}
          className='absolute right-4 bottom-20 text-gray-700 border-gray-300 text-md shadow 
            shadow-gray-600'
          onClick={handleCreateNewMessage}
        >
          New Chat
        </Button>
      )}

      <HomeNav />
    </>
  );
}

export default Chat;
