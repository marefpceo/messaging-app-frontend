import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Outlet, useLocation, useNavigate } from 'react-router';
// import {
//   conversationsService,
//   selectedConversationService,
// } from '../../api/apiChatServices/chatServices';
import HomeNav from '../../components/global_components/HomeNav';
import InterfaceHeader from '../../components/global_components/InterfaceHeader';
// import CreateMessageModal from '../../components/chat_components/CreateMessageModal';
// import ReplyMessageModal from '../../components/chat_components/ReplyMessageModal';
import CircularProgress from '@mui/material/CircularProgress';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

function Chat() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const currentPath = location.pathname;
  const matches = useMediaQuery('(max-width:600px)');
  const [isLoading, setIsLoading] = useState(true);
  const [conversationList, setConversationList] = useState([]);
  // const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  // const [isReplyMessageModalOpen, setIsReplyMessageModalOpen] = useState(false);
  const [selectedConversationId, setSelectedConversationId] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [refreshList, setRefreshList] = useState(false);

  // useEffect(() => {
  //   async function getConversations() {
  //     try {
  //       const response = await conversationsService(user.username);

  //       if (response.ok) {
  //         const responseData = await response.json();
  //         setConversationList(responseData);
  //         setRefreshList(false);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getConversations();
  // }, [refreshList]);

  // useEffect(() => {
  //   async function getSelectedConversation() {
  //     if (selectedConversationId === '') {
  //       return;
  //     }

  //     if (refreshList) {
  //       setRefreshList(false);
  //     }
  //     try {
  //       setIsLoading(true);
  //       const response = await selectedConversationService(
  //         user.username,
  //         selectedConversationId,
  //       );

  //       if (response.ok) {
  //         const responseData = await response.json();
  //         const sortedResponse = [...responseData.messages].sort(
  //           (a, b) => a.createdAt - b.createdAt,
  //         );
  //         setSelectedConversation({
  //           ...responseData,
  //           messages: sortedResponse,
  //         });
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getSelectedConversation();
  // }, [selectedConversationId, refreshList]);

  // useEffect(() => {
  //   if (selectedConversation === null) {
  //     return;
  //   }
  //   sessionStorage.setItem(
  //     'selectedConversation',
  //     JSON.stringify(selectedConversation),
  //   );
  // }, [selectedConversation]);

  function handleCreateNewMessage() {
    setIsMessageModalOpen(true);
  }

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  function handleConversationListClick() {
    navigate('/user/chat/messages', { replace: true });
  }

  function handleReplyClick() {
    setIsReplyMessageModalOpen(true);
  }

  return (
    <>
      <CreateMessageModal
        open={isMessageModalOpen}
        setOpen={setIsMessageModalOpen}
      />

      <ReplyMessageModal
        open={isReplyMessageModalOpen}
        setIsReplyMessageModalOpen={setIsReplyMessageModalOpen}
        selectedConversation={selectedConversation}
        setRefreshList={setRefreshList}
      />

      <div className='flex flex-col flex-1 py-2 bg-slate-100'>
        <InterfaceHeader title={'Chat'} user={user} />

        <div
          className={`h-full ${user.settings.background} ${user.settings.font} ${user.settings.color}`}
        >
          {isLoading ? (
            <div className='flex flex-col flex-1 justify-center items-center'>
              <CircularProgress />
              <p>Loading</p>
            </div>
          ) : (
            <Outlet
              context={{
                conversationList,
                handleConversationListClick,
                setSelectedConversationId,
                handleReplyClick,
                selectedConversation,
                refreshList,
                setRefreshList,
                user,
                isLoading,
              }}
            />
          )}
        </div>
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
