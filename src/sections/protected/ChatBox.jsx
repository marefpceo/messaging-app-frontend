import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { getMessagesService } from '../../api/apiChatServices/messagesServices';
import Avatar from '../../components/Avatar';

function ChatBox() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      try {
        const serviceResponse = await getMessagesService(user.username);
        const serviceResponseData = await serviceResponse.json();

        if (serviceResponse.ok) {
          console.log(messages);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getMessages();
  }, [messages]);
  console.log(location);

  return (
    <section className='flex flex-col flex-1 h-full'>
      <div className='currentUser-div h-1/6 p-4 grid grid-cols-[1fr_2fr_1fr] items-center'>
        <div className='flex flex-col col-start-2'>
          <h3 className='text-lg italic'>{location.state.contactUsername}</h3>
          <p className='text-sm'>Contact status(bio)</p>
        </div>
        <span className='col-start-3'>
          <Avatar />
        </span>
      </div>
      <div
        className='h-full flex flex-col `bg-gray-50 shadow-[inset_0_0_8px_0] rounded-md shadow-gray-300 
        bg-gray-50'
      >
        <div className='chatDiv h-full p-4 flex flex-col-reverse overflow-scroll *:rounded-md'>
          <p className='border w-fit py-1 px-2 border-gray-400 shadow bg-customGreen'>
            text 1
          </p>
        </div>
        <div className='messageInput px-2 h-12 w-full justify-center'>
          <input
            type='text'
            name='messageInput'
            id='messageInput'
            className='w-full h-full p-2 border '
          />
        </div>
      </div>
    </section>
  );
}

export default ChatBox;
