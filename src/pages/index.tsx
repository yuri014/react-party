import type { NextPage } from 'next';
import { MdOndemandVideo } from 'react-icons/md';

import Chat from '../components/Chat';
import LandingContainer from './_styled';

const Home: NextPage = () => (
  <LandingContainer>
    <main>
      <h1>ASSISTA UM VÍDEO COM SEUS AMIGOS</h1>
      <MdOndemandVideo size={200} />
      <button type="button">Iniciar Party</button>
    </main>
    <Chat />
  </LandingContainer>
);

export default Home;
