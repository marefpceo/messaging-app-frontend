import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function CreateMessageModal({ open, setOpen }) {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userContacts, setUserContacts] = useState();
  const [selectedUser, setSelectedUser] = useState('');

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

  function handleSelectChange(e) {
    setSelectedUser(e.target.value);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        fullScreen={true}
      >
        <DialogTitle component={'h2'} marginTop={'20%'}>
          New Message
        </DialogTitle>
        <DialogContent className='flex flex-col gap-10'>
          <div>
            <InputLabel id='contact-select-label'>To:</InputLabel>
            <Select
              labelId='contact-select-label'
              id='contact-select'
              value={selectedUser}
              onChange={handleSelectChange}
              fullWidth={true}
            >
              <MenuItem disabled value=''>
                <em>Choose a contact</em>
              </MenuItem>
              {userContacts &&
                userContacts.map((contact) => (
                  <MenuItem
                    key={contact.contactUser.id}
                    value={contact.contactUser.id}
                  >
                    {contact.contactUser.username}
                  </MenuItem>
                ))}
            </Select>
          </div>

          <div>
            <InputLabel id='message-input-label'>Message:</InputLabel>
            <TextField
              id='message-input'
              multiline
              fullWidth={true}
              minRows={6}
            />
          </div>

          <DialogActions>
            <Button
              variant='contained'
              startIcon={<SendRoundedIcon />}
              className='bg-lime-500'
            >
              Send
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateMessageModal;
