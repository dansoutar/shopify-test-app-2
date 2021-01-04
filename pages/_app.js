import React, { Component } from 'react';

import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin } = this.props;
    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };
    return (
      <>
        <Head>
          <title>Sample App</title>
          <meta charSet='utf-8' />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations}>
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    shopOrigin: ctx.query.shop,
  };
};
