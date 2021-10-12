import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { fetchPublicRepos } from '../api/fetch/github';
import { isSuccessResult } from '../domain/asyncResult';
import styles from '../../styles/Home.module.css';
import CardList, { CardListItem } from '../components/CardList';

const GitHubRepositoryTemplate: React.VFC = () => {
  const [items, setItems] = useState<CardListItem[]>();

  useEffect(() => {
    const fetchRepo = async () => {
      const publicRepos = await fetchPublicRepos();
      if (isSuccessResult(publicRepos)) {
        const cardListItems = publicRepos.value.map((value) => ({
          id: value.id,
          title: value.name,
          url: value.htmlUrl,
          description: value.description,
        }));

        setItems(cardListItems);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchRepo();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>src/pages/repos.tsx</code>
        </p>
        {items == null ? '' : <CardList items={items} />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default GitHubRepositoryTemplate;