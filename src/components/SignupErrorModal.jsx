import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SignupErrorModal({
  isErrorModalOpen,
  setIsErrorModalOpen,
  formErrors,
}) {
  function handleClose() {
    setIsErrorModalOpen(false);
  }

  return (
    <>
      <Dialog open={isErrorModalOpen} onClose={handleClose}>
        <DialogTitle className='font-bold'>
          {'Input Validation Errors'}
        </DialogTitle>
        <IconButton onClick={handleClose} className='absolute top-2 right-2'>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {
            <ul>
              {formErrors.map((item) => (
                <li key={item.path + item.location} className='list-disc'>
                  {item.msg}
                </li>
              ))}
            </ul>
          }
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SignupErrorModal;
