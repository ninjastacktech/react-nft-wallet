import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja NFT Wallet</title>
      </Head>

      <main className={styles.main}>Main Content 2</main>

      <footer className={styles.footer}>Footer content</footer>
    </div>
  );
};

export default Home;
