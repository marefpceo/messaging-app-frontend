import { useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import { AuthContext } from '../contexts/AuthContext';

function ContactProfileModal({
  open,
  close,
  selectedProfile,
  isLoading,
  isListTypeFull,
}) {
  const { user } = useContext(AuthContext);

  async function addContact() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/contact/add`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currentUser: user.username,
            addUser: selectedProfile.username,
          }),
        },
      );

      if (response.status === 200) {
        close();
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Dialog open={open} fullWidth={true} maxWidth={'lg'}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <CloseIcon
            sx={{
              position: 'absolute',
              top: '2%',
              right: '2%',
              width: 40,
              height: 40,
            }}
            onClick={close}
            className='p-1 bg-lime-400 text-gray-700 rounded-4xl'
          />
          <div className='flex flex-col items-center py-8'>
            <DialogTitle className='flex flex-col items-center'>
              <Avatar sx={{ width: 150, height: 150 }} />
              <p className='mt-4 text-2xl'>
                {selectedProfile.firstname} {selectedProfile.lastname}
              </p>
              <p className='italic'>{selectedProfile.username}</p>
            </DialogTitle>
            <DialogContent>
              <p>{selectedProfile.bio}</p>
            </DialogContent>
            <DialogActions>
              <>
                {isListTypeFull ? (
                  <IconButton
                    aria-label='add contact'
                    size='large'
                    className='text-gray-700 bg-lime-400'
                    onClick={addContact}
                  >
                    <PersonAddIcon sx={{ width: 30, height: 30 }} />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label='remove contact'
                    size='large'
                    className='text-gray-700 bg-lime-400'
                  >
                    <PersonRemoveIcon sx={{ width: 30, height: 30 }} />
                  </IconButton>
                )}
              </>
            </DialogActions>
          </div>
        </>
      )}
    </Dialog>
  );
}

export default ContactProfileModal;
