import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import ContactProfileModal from './ContactProfileModal';

function ContactList({ list, currentView }) {
  const listview = 'flex gap-8 items-center';
  const iconview = 'flex flex-col gap-3 items-center';
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState({});

  useEffect(() => {
    async function getUserInfo() {
      if (userId === null) {
        return;
      }
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/user/${userId}/edit_profile`,
          {
            credentials: 'include',
          },
        );

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
      />
      <div
        className={`contact-list mt-8 ${currentView === 'list' ? 'ml-2' : 'grid grid-cols-2 gap-4'}`}
      >
        {list &&
          list.map((contact) => (
            <div
              key={contact.id}
              className={`my-4 mx-2 ${currentView === 'list' ? listview : iconview}`}
              onClick={displayContact}
              id={contact.id}
            >
              <Avatar sx={{ width: 65, height: 65 }} />
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
