import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import packageJson from '../package.json';

// const myImageLoader = ({ src, width, quality }: any) => {
//   return src as string;
// };

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dapp Example - OneKey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/ethereum">EVM →</Link>
        <Link href="/near">NEAR →</Link>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.onekey.so" target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
          Powered by OneKey v{packageJson.version}
        </a>
      </footer>
    </div>
  );
};

export default Home;
