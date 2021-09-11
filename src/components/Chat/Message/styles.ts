import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;

  img {
    width: 5.5rem;
    height: 5.5rem;
  }

  .user-message {
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 1.6rem;

    p {
      margin-top: 0.5rem;
      font-weight: 400;
    }
  }
`;

export default MessageContainer;
