import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

function Messages() {
  const [
    selectedConversationId,
    setSelectedConversationId,
    selectedConversation,
    setSelectedConversation,
  ] = useOutletContext();

  console.log(selectedConversation.messages);
  return (
    <>
      {selectedConversation.messages.map((message) => (
        <p>{message.context}</p>
      ))}
    </>
  );
}

export default Messages;
