import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {
  addContactService,
  removeContactService,
} from '../api/apiContactServices/contactServices';
import { Link } from 'react-router';
import Avatar from './Avatar';
import userPlusSolid from '../assets/userPlusSolid.png';
import userMinusSolid from '../assets/userMinusSolid.png';

function ContactList({ list, isListTypeFull, setShouldReload }) {
  const { user } = useContext(AuthContext);

  // Add a contact to the user's favorites
  async function addContact(contactUsername) {
    try {
      const addResponse = await addContactService(
        user.username,
        contactUsername,
      );

      if (addResponse.status === 200) {
        setShouldReload(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Remove a contact from the user's favorites
  async function removeContact(contactUsername) {
    try {
      const removeResponse = await removeContactService(
        user.username,
        contactUsername,
      );

      if (removeResponse.status === 200) {
        setShouldReload(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className={`contact-list mt-8 ml-2`}>
        {list &&
          list.map((contact) => (
            <div
              key={contact.id}
              className={`my-4 mx-2 grid grid-cols-2 overflow-scroll`}
              id={contact.id}
            >
              <Link to={`/user/chat/${contact.username}`}>
                <div className='flex gap-8 items-center'>
                  <Avatar />
                  <p>
                    {contact.firstname} {contact.lastname}
                  </p>
                </div>
              </Link>
              <div className='ml-auto pr-2 z-40'>
                {isListTypeFull ? (
                  <div className='p-4'>
                    <img
                      src={userPlusSolid}
                      alt='Add user icon'
                      width={24}
                      onClick={() => {
                        addContact(contact.username);
                      }}
                    />
                  </div>
                ) : (
                  <div className='p-4'>
                    <img
                      src={userMinusSolid}
                      alt='Remove user icon'
                      width={24}
                      onClick={() => {
                        removeContact(contact.username);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ContactList;
