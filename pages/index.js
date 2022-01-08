import Head from 'next/head';
import { useMoralis } from 'react-moralis';

import Messages from '../components/Messages';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home() {
  const { isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
