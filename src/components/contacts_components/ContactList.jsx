import { useState, useEffect } from 'react';
import { profileInfoService } from '../../api/apiContactServices/contactServices';
import Avatar from '@mui/material/Avatar';
import ContactProfileModal from './ContactProfileModal';

function ContactList({ list, isListTypeFull, setShouldReload }) {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserInfo() {
      if (userId === null) {
        return;
      }
      try {
        const response = await profileInfoService(userId);

        const responseData = await response.json();

        if (response.status === 200) {
          setSelectedProfile({
            id: responseData.id,
            username: responseData.username,
            firstname: responseData.firstname,
            lastname: responseData.lastname,
            bio: responseData.bio,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getUserInfo();
  }, [userId]);

  function displayContact(e) {
    const value = e.currentTarget.id;
    setUserId(value);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setUserId(null);
  }

  return (
    <>
      <ContactProfileModal
        open={open}
        close={handleClose}
        selectedProfile={selectedProfile}
        isLoading={isLoading}
        isListTypeFull={isListTypeFull}
        setShouldReload={setShouldReload}
      />
      <div className={`contact-list mt-8 ml-2`}>
        {list &&
          list.map((contact) => (
            <div
              key={contact.id}
              className={`my-4 mx-2 flex gap-8 items-center overflow-scroll`}
              onClick={displayContact}
              id={contact.id}
            >
              <Avatar sx={{ width: 38, height: 38 }} />
              <p>
                {contact.firstname} {contact.lastname}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default ContactList;
