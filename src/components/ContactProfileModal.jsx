import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';

function ContactProfileModal({
  open,
  close,
  selectedProfile,
  isLoading,
  isListTypeFull,
}) {
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
                  <AddCircleOutlineIcon sx={{ width: 30, height: 30 }} />
                ) : (
                  <RemoveCircleOutlineIcon sx={{ width: 30, height: 30 }} />
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
