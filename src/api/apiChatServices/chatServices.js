// API call to fetch all conversations for the user
export async function conversationsService(username) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/message/${username}/conversations`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching conversations', error);
    throw error;
  }
}

// API call to fetch selected conversation
export async function selectedConversationService(username, conversationId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/message/${username}/conversation/${conversationId}`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching selected conversation', error);
    throw error;
  }
}

export default { conversationsService, selectedConversationService };
