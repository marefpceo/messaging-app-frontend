import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import CreateMessageModal from '../../components/CreateMessageModal';
import MessageList from '../../components/MessageList';
import TabPanel from '../../components/TabPanel';
import CircularProgress from '@mui/material/CircularProgress';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
  const [messageReceivedList, setMessageReceivedList] = useState([]);
  const [messageSentList, setMessageSentList] = useState([]);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isDisplayModalOpen, setIsDisplayModalOpen] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function getMessages() {
      try {
        const [receivedList, sentList] = await Promise.all([
          fetch(
            `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/messages_received`,
            apiHeader,
          ),
          fetch(
            `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/messages_sent`,
            apiHeader,
          ),
        ]);

        const receivedListData = await receivedList.json();
        const sentListData = await sentList.json();

        if (receivedList.ok && sentList.ok) {
          setMessageReceivedList(receivedListData);
          setMessageSentList(sentListData);
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
    setIsMessageModalOpen(true);
  }

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <CreateMessageModal
        open={isMessageModalOpen}
        setOpen={setIsMessageModalOpen}
      />
      <div className='flex flex-col flex-1 py-2 bg-slate-100'>
        <InterfaceHeader title={'Chat'} user={user} />

        {isLoading ? (
          <div className='flex flex-col flex-1 justify-center items-center'>
            <CircularProgress />
            <p>Loading</p>
          </div>
        ) : (
          <div className='homeBody mt-8 min-h-full flex flex-col justify-start  items-center'>
            <div className='min-w-full'>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='message tabs'
              >
                <Tab label='Received' />
                <Tab label='Sent' />
              </Tabs>
              <TabPanel value={value} index={0}>
                {messageReceivedList.length === 0 ? (
                  <p>No Messages</p>
                ) : (
                  <MessageList
                    messageList={messageReceivedList}
                    isReceivedList={true}
                  />
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {messageSentList.length === 0 ? (
                  <p>No Messages</p>
                ) : (
                  <MessageList
                    messageList={messageSentList}
                    isReceivedList={false}
                  />
                )}
              </TabPanel>
            </div>
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
