import React, { Component } from 'react';

import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Sample App</title>
          <meta charSet='utf-8' />
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </>
    );
  }
}
