import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditBioModal({ currentBio, open, setOpen, updateBio, handleChange }) {
  function handleFocus(e) {
    e.target.select();
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} fullWidth={true}>
        <DialogTitle>{'Edit Bio'}</DialogTitle>
        <DialogContent>
          <TextField
            className='bg-gray-100'
            id='edit-bio'
            variant='outlined'
            value={currentBio}
            multiline={true}
            fullWidth={true}
            focused={true}
            onFocus={handleFocus}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#000',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'gray',
                  borderWidth: '0px',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button className='text-gray-600 bg-gray-300' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant='contained'
            className='bg-green-600'
            onClick={updateBio}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditBioModal;
