import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MetaTag } from '../constants/metaTag';
import { appUrlPath } from '../constants/url';

type Props = {
  children: ReactNode;
  metaTag: MetaTag;
};

export const DefaultLayout: FC<Props> = ({ children, metaTag }) => (
  <>
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
    <Header
      topLink={
        <Link href={appUrlPath.top}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <h1>nekochans</h1>
        </Link>
      }
    />
    <Hero />
    {children}
    <Footer />
  </>
);
