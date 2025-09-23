import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function DisplayMessageModal({
  open,
  setOpen,
  handleReplyClick,
  selectedMessage,
}) {
  const { user } = useContext(AuthContext);

  function handleClose(e, reason) {
    if (reason === 'backdropClick') {
      return;
    }
    setOpen(false);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        fullScreen={false}
        disableRestoreFocus={true}
        disableEscapeKeyDown={true}
      >
        <CloseIcon className='absolute top-2 right-2' onClick={handleClose} />
        <DialogTitle className='mt-4 text-3xl'>
          {selectedMessage !== null ? selectedMessage.conversation.subject : ''}
        </DialogTitle>
        <span className='ml-6 text-sm italic text-gray-500'>
          {selectedMessage !== null ? selectedMessage.recipient.username : ''}
        </span>
        <Divider variant='middle' aria-hidden='true' />
        <DialogContent className='mb-12 overflow-scroll'>
          <p>{selectedMessage !== null ? selectedMessage.context : ''}</p>
        </DialogContent>
        <Divider variant='middle' aria-hidden='true' />
        <DialogActions className='py-4 justify-center'>
          <IconButton aria-label='reply' onClick={handleReplyClick}>
            <ReplyIcon className='text-lime-500' />
          </IconButton>
          <IconButton aria-label='delete'>
            <DeleteIcon className='text-red-600' />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DisplayMessageModal;
