import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';

export default class extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      if (jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Head>
                <title>nekochans</title>
              </Head>
              <Component {...pageProps} />
            </>
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </>
    );
  }
}
