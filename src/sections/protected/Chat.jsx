import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Outlet, useLocation, useNavigate } from 'react-router';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import CreateMessageModal from '../../components/CreateMessageModal';
import DisplayMessageModal from '../../components/DisplayMessageModal';
import ReplyMessageModal from '../../components/ReplyMessageModal';
import MessageList from '../../components/MessageList';
import ConversationList from '../../components/ConversationList';
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
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const currentPath = location.pathname;
  const matches = useMediaQuery('(max-width:600px)');
  const [isLoading, setIsLoading] = useState(true);
  const [conversationList, setConversationList] = useState([]);
  const [messageReceivedList, setMessageReceivedList] = useState([]);
  const [messageSentList, setMessageSentList] = useState([]);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isDisplayModalOpen, setIsDisplayModalOpen] = useState(false);
  const [isReplyMessageModalOpen, setIsReplyMessageModalOpen] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState('');
  const [selectedConversationId, setSelectedConversationId] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function getConversations() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/conversations`,
          apiHeader,
        );

        if (response.ok) {
          const responseData = await response.json();
          setConversationList(responseData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getConversations();
  }, []);

  // useEffect(() => {
  //   async function getMessages() {
  //     try {
  //       const [receivedList, sentList] = await Promise.all([
  //         fetch(
  //           `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/messages_received`,
  //           apiHeader,
  //         ),
  //         fetch(
  //           `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/messages_sent`,
  //           apiHeader,
  //         ),
  //       ]);

  //       const receivedListData = await receivedList.json();
  //       const sentListData = await sentList.json();

  //       if (receivedList.ok && sentList.ok) {
  //         setMessageReceivedList(receivedListData);
  //         setMessageSentList(sentListData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getMessages();
  // }, []);

  // console.log(conversationList);
  // console.log(selectedConversation);
  // console.log(selectedConversationId);

  useEffect(() => {
    async function getSelectedConversation() {
      if (selectedConversationId === '') {
        return;
      }
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/conversation/${selectedConversationId}`,
          apiHeader,
        );

        if (response.ok) {
          const responseData = await response.json();
          setSelectedConversation(responseData);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getSelectedConversation();
  }, [selectedConversationId]);

  function handleCreateNewMessage() {
    setIsMessageModalOpen(true);
  }

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  function handleConversationListClick() {
    navigate('/user/chat/messages');
  }

  function handleReplyClick() {
    setIsReplyMessageModalOpen(true);
    setIsDisplayModalOpen(false);
  }

  return (
    <>
      <CreateMessageModal
        open={isMessageModalOpen}
        setOpen={setIsMessageModalOpen}
      />

      {/* Remove DisplayMessageModal component if no longer needed */}
      {/* <DisplayMessageModal
        open={isDisplayModalOpen}
        setOpen={setIsDisplayModalOpen}
        handleReplyClick={handleReplyClick}
        selectedMessage={selectedMessage}
        setSelectedMessage={setSelectedMessage}
      /> */}

      <ReplyMessageModal
        open={isReplyMessageModalOpen}
        setIsReplyMessageModalOpen={setIsReplyMessageModalOpen}
        selectedMessage={selectedMessage}
      />

      <div className='flex flex-col flex-1 py-2 bg-slate-100'>
        <InterfaceHeader title={'Chat'} user={user} />

        {isLoading ? (
          <div className='flex flex-col flex-1 justify-center items-center'>
            <CircularProgress />
            <p>Loading</p>
          </div>
        ) : currentPath !== '/user/chat/messages' ? (
          <div className='homeBody mt-8 min-h-full flex flex-col justify-start  items-center'>
            <div className='min-w-full'>
              <ConversationList
                conversationList={conversationList}
                displayConversationMessages={handleConversationListClick}
                setSelectedConversationId={setSelectedConversationId}
              />
            </div>
          </div>
        ) : (
          <Outlet
            context={[
              selectedConversationId,
              setSelectedConversationId,
              selectedConversation,
              setSelectedConversation,
              user,
            ]}
          />
        )}
      </div>

      {matches ? (
        <IconButton
          className='absolute right-4 bottom-20 text-gray-700 border border-gray-200 text-md 
            shadow-lg shadow-gray-600'
          onClick={handleCreateNewMessage}
          hidden={currentPath === '/user/chat/messages' ? true : false}
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
          hidden={currentPath === '/user/chat/messages' ? true : false}
        >
          New Chat
        </Button>
      )}

      <HomeNav />
    </>
  );
}

export default Chat;
