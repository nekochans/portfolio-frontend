import { Head, Html, Main, NextScript } from 'next/document';

const CustomDocument = (): JSX.Element => {
  return (
    <Html prefix="og: https://ogp.me/ns#">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
