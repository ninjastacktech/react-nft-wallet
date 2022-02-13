import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import CollectionsList from '../components/nft-collections/collections-list';
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
        <div>
          <AccountConnector />
        </div>
        {/* <CollectionsList /> */}
      </main>

      <footer className={styles.footer}>Footer content</footer>
    </div>
  );
};

export default Home;
