import { DateTime } from 'luxon';

function ConversationList({
  conversationList,
  displayConversationMessages,
  setSelectedConversationId,
}) {
  function handleSetId(id) {
    setSelectedConversationId(id);
  }

  return (
    <>
      {conversationList.map((conversation) => (
        <div
          className='my-4 px-2 flex justify-between items-center bg-gray-200 w-full'
          key={conversation.id}
          id={`${conversation.id}`}
          onClick={() => {
            handleSetId(conversation.id), displayConversationMessages();
          }}
        >
          <p>{conversation.messages[0].recipient.username}</p>
          <p>{conversation.subject}</p>
          <div className='flex flex-col justify-center'>
            <p>{`${DateTime.fromISO(conversation.createdAt).toFormat('dd LLL')}`}</p>
            <p>{`${DateTime.fromISO(conversation.createdAt).toFormat('t')}`}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ConversationList;
