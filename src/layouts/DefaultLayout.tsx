import React from 'react';
import { Head, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

const DefaultLayout = () => (
  <html lang="ja">
    <Head>
      <meta charSet="utf-8" />
      {/* Use minimum-scale=1 to enable GPU rasterization */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      {/* PWA primary color */}
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </html>
);

export default DefaultLayout;
