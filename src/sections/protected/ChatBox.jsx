import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import {
  getMessagesService,
  createMessageService,
} from '../../api/apiChatServices/messagesServices';
import { DateTime } from 'luxon';
import Avatar from '../../components/Avatar';
import sendIcon from '../../assets/sendIcon.png';
import backIcon from '../../assets/backIcon.png';

function ChatBox() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [messageDraft, setMessageDraft] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function getMessages() {
      try {
        const serviceResponse = await getMessagesService(user.username);
        const serviceResponseData = await serviceResponse.json();

        if (serviceResponse.ok) {
          // Filters message list and creates an array of only messages from the user and current contact
          const filteredMessages = serviceResponseData.filter((message) => {
            return (
              (message.senderId === user.id ||
                message.recipientId === user.id) &&
              (message.recipientId === location.state.contactId ||
                message.senderId === location.state.contactId)
            );
          });
          setMessages(filteredMessages);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setRefresh(false);
      }
    }
    getMessages();
  }, [refresh]);

  // Creates a new message
  async function createMessage() {
    try {
      const serviceResponse = await createMessageService(
        user.username,
        messageDraft,
        user.id,
        location.state.contactId,
      );
      const serviceResponseData = await serviceResponse.json();

      if (serviceResponse.ok) {
        console.log(serviceResponseData.message);
        setMessageDraft('');
        setRefresh(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setMessageDraft(value);
  }

  function handleClick() {
    setMessageDraft('');
    createMessage();
    console.log('Click');
  }

  return (
    <section className='flex flex-col flex-1 h-full'>
      <div className='currentUser-div h-1/6 p-4 grid grid-cols-[1fr_2fr_1fr] items-center'>
        <img
          src={backIcon}
          alt='Back to previous'
          width={32}
          onClick={() => navigate(-1)}
        />
        <div className='flex flex-col col-start-2'>
          <h3 className='text-lg italic'>{location.state.contactUsername}</h3>
          <p className='text-sm'>Contact status(bio)</p>
        </div>
        <span className='col-start-3'>
          <Avatar />
        </span>
      </div>
      <div
        className='h-full flex flex-col pb-4 shadow-[inset_0_0_8px_0] rounded-md shadow-gray-300 
        bg-gray-50'
      >
        <div className='chatDiv h-full p-4 flex flex-col-reverse overflow-scroll no-scrollbar *:rounded-md'>
          {
            // Iterate through the list of messages.
            messages.map((message) => (
              <span
                key={message.id}
                className={`w-fit my-2.5 flex flex-col gap-3 
              ${message.senderId === user.id ? '' : 'ml-auto'}`}
              >
                <p
                  className={`border w-fit h-10 py-1 px-2 flex items-center border-gray-400 shadow 
                ${message.senderId === user.id ? 'bg-customGreen' : 'bg-blue-100'} rounded-md`}
                >
                  {message.context}
                </p>
                <sub
                  className={`text-${message.senderId === user.id ? 'left' : 'right'} text-gray-600`}
                >
                  {DateTime.fromISO(message.createdAt).toFormat('t')}
                </sub>
              </span>
            ))
          }
        </div>
        <div className='messageInput px-2 h-14 w-full flex'>
          <input
            type='text'
            name='messageInput'
            id='messageInput'
            value={messageDraft}
            className='w-full h-full p-2 bg-customGreen rounded-xl shadow-[inset_0_0_5px_0] shadow-gray-400'
            onChange={handleChange}
          />
          <div
            className='sendMessageBtn ml-2 p-3 flex justify-center items-center rounded-full bg-customGreen'
            onClick={handleClick}
          >
            <img src={sendIcon} alt='Send message' width={32} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatBox;
