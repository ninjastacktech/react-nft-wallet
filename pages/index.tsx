import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import CollectionsListHost from '../components/nft-collections/collections-list-host';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const AccountConnector = dynamic(() => import('../components/wallet/components/connectors/AccountConnector'), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja NFT Wallet</title>
      </Head>

      <main className={styles.main}>
        <div className="flex flex-col items-center mb-8">
          <a
            className="flex flex-col items-center border rounded border-slate-800 dark:border-slate-100 w-8/12"
            href="https://github.com/ninjastacktech/opensea-net"
            target="_blank"
            rel="noreferrer">
            <h5>This is a demo for the OpenSea C# SDK developed by NinjaStack</h5>
            <span>https://github.com/ninjastacktech/opensea-net</span>
          </a>
          <AccountConnector />
        </div>

        <CollectionsListHost />
      </main>
    </div>
  );
};

export default Home;
