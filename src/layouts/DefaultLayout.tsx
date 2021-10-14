import React, { ReactNode } from 'react';
import Head from 'next/head';
import { MetaTag } from '../constants/metaTag';
import Footer from '../components/Footer';
import styles from '../../styles/Home.module.css';
import Title from '../components/Title';
import Description from '../components/Description';

type Props = {
  children: ReactNode;
  metaTag: MetaTag;
  filename: string;
};

const DefaultLayout: React.VFC<Props> = ({ children, metaTag, filename }) => (
  <div className={styles.container}>
    <Head>
      <title>{metaTag.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={metaTag.title} />
      <meta property="og:description" content={metaTag.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaTag.ogpImgUrl} />
      <meta property="og:url" content={metaTag.ogpTargetUrl} />
      <meta property="og:site_name" content={metaTag.title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <Title />
      <Description filename={filename} />
      {children}
    </main>
    <Footer />
  </div>
);

export default DefaultLayout;
