import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { getMessagesService } from '../../api/apiChatServices/messagesServices';
import Avatar from '../../components/Avatar';
import sendIcon from '../../assets/sendIcon.png';
import backIcon from '../../assets/backIcon.png';

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

  function handleClick() {
    console.log('Click');
  }

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
        className='h-full flex flex-col pb-4 shadow-[inset_0_0_8px_0] rounded-md shadow-gray-300 
        bg-gray-50'
      >
        <div className='chatDiv h-full p-4 flex flex-col-reverse overflow-scroll *:rounded-md'>
          <p className='border w-fit h-10 py-1 px-2 flex items-center border-gray-400 shadow bg-customGreen'>
            text 1
          </p>
        </div>
        <div className='messageInput px-2 h-14 w-full flex'>
          <input
            type='text'
            name='messageInput'
            id='messageInput'
            className='w-full h-full p-2 bg-customGreen rounded-xl shadow-[inset_0_0_5px_0] shadow-gray-400'
          />
          <div
            className='sendMessageBtn ml-2 p-3 flex justify-center items-center rounded-full bg-customGreen'
            onClick={handleClick}
          >
            <img src={sendIcon} alt='Send message' width={44} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatBox;
