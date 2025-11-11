import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { createReplyService } from '../../api/apiChatServices/messagesServices';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function ReplyMessageModal({
  open,
  setIsReplyMessageModalOpen,
  selectedConversation,
  setRefreshList,
}) {
  const { user } = useContext(AuthContext);
  const [messageDraft, setMessageDraft] = useState('');

  async function createReply() {
    try {
      const response = await createReplyService(
        user.username,
        user.id,
        selectedConversation.id,
        selectedConversation.messages[0].recipientId,
      );

      const responseData = await response.json();

      if (response.ok) {
        setRefreshList(true);
        handleClose();
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleClose() {
    setIsReplyMessageModalOpen(false);
  }

  function handleMessageChange(e) {
    setMessageDraft(e.target.value);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        fullScreen={true}
        disableRestoreFocus={true}
        disableEscapeKeyDown={true}
      >
        <DialogTitle
          component={'h2'}
          marginTop={'20%'}
          className='flex justify-between items-center'
        >
          <span>{`RE: ${selectedConversation && selectedConversation.subject}`}</span>
          <span className='italic font-bold text-lg'>
            {selectedConversation &&
              selectedConversation.messages[0].recipient.username}
          </span>
        </DialogTitle>
        <Divider variant='middle' />
        <DialogContent className='flex flex-col gap-5'>
          <div className='mt-8'>
            <InputLabel id='message-input-label'>Message:</InputLabel>
            <TextField
              id='message-input'
              multiline
              fullWidth={true}
              minRows={6}
              onChange={handleMessageChange}
            />
          </div>

          <DialogActions className='flex gap-4'>
            <Button
              variant='contained'
              startIcon={<CancelRoundedIcon />}
              color='error'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              startIcon={<SendRoundedIcon />}
              className='bg-lime-500'
              disabled={messageDraft.length === 0 ? true : false}
              onClick={createReply}
            >
              Send
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ReplyMessageModal;
