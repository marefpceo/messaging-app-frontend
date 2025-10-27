import { useOutletContext } from 'react-router';

import ConversationList from '../../components/ConversationList';

function Conversations() {
  const {
    conversationList,
    handleConversationListClick,
    setSelectedConversationId,
  } = useOutletContext();

  return (
    <div className='homeBody mt-8 min-h-full flex flex-col justify-start  items-center'>
      <div className='min-w-full'>
        <ConversationList
          conversationList={conversationList}
          displayConversationMessages={handleConversationListClick}
          setSelectedConversationId={setSelectedConversationId}
        />
      </div>
    </div>
  );
}

export default Conversations;
