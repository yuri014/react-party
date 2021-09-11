import styled from 'styled-components';

const LandingContainer = styled.div`
  main {
    width: 75vw;
    height: 100vh;
    padding: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
      text-align: center;
      font-size: 3.6rem;
    }

    svg {
      color: ${({ theme }) => theme.colors.mainPurple};
    }

    button {
      background: ${({ theme }) => theme.colors.mainPurple};
      border: none;
      padding: 3rem 8rem;
      border-radius: 2rem;
      font-size: 2.8rem;
      cursor: pointer;
      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export default LandingContainer;
