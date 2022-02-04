import type { NextPage } from 'next';
import Head from 'next/head';
import CollectionsList from '../components/nft-collections/collections-list';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja NFT Wallet</title>
      </Head>

      <main className={styles.main}>
        Main Content 3
        <CollectionsList />
      </main>

      <footer className={styles.footer}>Footer content</footer>
    </div>
  );
};

export default Home;
