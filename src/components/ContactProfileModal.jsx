import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

function ContactProfileModal({ open }) {
  return (
    <Dialog open={open}>
      <DialogTitle>User Name</DialogTitle>
    </Dialog>
  );
}

export default ContactProfileModal;
