import React from 'react';
import MessageContainer from './styles';

interface MessageProps {
  username: string;
  message: string;
  image: string;
}

const Message: React.FC<MessageProps> = ({ message, username, image }) => (
  <MessageContainer>
    <img src={image} alt="" />
    <div className="user-message">
      <strong>{username}</strong>
      <p>{message}</p>
    </div>
  </MessageContainer>
);

export default Message;
