// API call to get list of user's contacts
export async function getContactsService(username) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/message/${username}/create_message`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching user contacts', error);
    throw error;
  }
}

// API call to create a new message
export async function createMessageService(
  username,
  subjectInput,
  messageDraftInput,
  userIdInput,
  recipientIdInput,
) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/message/${username}/create_message`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subjectInput,
          context: messageDraftInput,
          senderId: userIdInput,
          recipientId: recipientIdInput,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error creating new message', error);
    throw error;
  }
}

// API call to create a reply to existing conversation
export async function createReplyService(
  username,
  userIdInput,
  conversationIdInput,
  recipientIdInput,
  messageDraft,
) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/message/${username}/create_message`,
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversationId: conversationIdInput,
          senderId: userIdInput,
          recipientId: recipientIdInput,
          context: messageDraft,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error creating reply', error);
    throw error;
  }
}

// API call to delete message from current user's view
export async function deleteMessageService(
  username,
  conversationIdInput,
  messageIdList,
  userIdInput,
) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/message/${username}/message/delete`,
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversationId: conversationIdInput,
          messageIdList: messageIdList,
          userId: `${userIdInput}`,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error deleting message', error);
    throw error;
  }
}

export default {
  getContactsService,
  createMessageService,
  createReplyService,
  deleteMessageService,
};
