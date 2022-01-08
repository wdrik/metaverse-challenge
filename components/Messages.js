import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';

import SendMessage from './SendMessage';
import Message from './Message';

const MINS_DURATION = 150;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>

      <div className="space-y-6 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
}

export default Messages;
