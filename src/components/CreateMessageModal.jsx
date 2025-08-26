import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

function CreateMessageModal({ open, setOpen }) {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userContacts, setUserContacts] = useState();

  useEffect(() => {
    if (open === false) {
      return;
    }
    async function getContacts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/message/${user.username}/create_message`,
          {
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        const responseData = await response.json();

        if (response.ok) {
          setUserContacts(responseData);
          console.log(userContacts);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getContacts();
  }, [open]);

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle component={'h2'}>New Message</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </>
  );
}

export default CreateMessageModal;
