import styled from 'styled-components';

const ChatContainer = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 25vw;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  padding: 2rem;
`;

export default ChatContainer;
