import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

function ContactProfileModal({ open, close }) {
  return (
    <Dialog open={open} fullWidth={true} maxWidth={'lg'}>
      <CloseIcon
        sx={{ position: 'absolute', right: 1, width: 40, height: 40 }}
        onClick={close}
      />
      <div className='flex flex-col items-center'>
        <DialogTitle className='flex flex-col items-center'>
          <Avatar sx={{ width: 150, height: 150 }} />
          <p className='mt-4'>User Name</p>
        </DialogTitle>
        <DialogContent>
          <p>User's bio</p>
        </DialogContent>
        <DialogActions>
          <AddCircleOutlineIcon sx={{ width: 30, height: 30 }} />
          <RemoveCircleOutlineIcon sx={{ width: 30, height: 30 }} />
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default ContactProfileModal;
