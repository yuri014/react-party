import React from 'react';

import ChatContainer from './styles';
import Message from './Message';

const Chat: React.FC = () => (
  <ChatContainer>
    <Message
      username="User01"
      image="/assets/avatar-example-1.svg"
      message="Pode dar play!"
    />
    <Message
      username="User02"
      image="/assets/avatar-example-2.svg"
      message="Bora"
    />
  </ChatContainer>
);

export default Chat;
