import '../../styles/globals.css';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import GoogleTagManager, {
  GoogleTagManagerId,
} from '../components/GoogleTagManager';
import { googleTagManagerId, pageview } from '../utils/gtm';

import type { AppProps } from 'next/app';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
