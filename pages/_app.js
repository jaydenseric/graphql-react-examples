// ignore unused exports default

import { stylesGlobal, stylesGlobalTheme } from 'device-agnostic-ui';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import Head from 'next/head';

const App = ({ Component, pageProps, graphql }) => (
  <GraphQLProvider graphql={graphql}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light dark" />
      <meta name="theme-color" content="white" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jaydenseric" />
      <meta name="twitter:creator" content="@jaydenseric" />
      <link rel="icon" sizes="192x192" href="/static/icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
    </Head>
    <Component {...pageProps} />
    <style jsx global>
      {stylesGlobalTheme}
    </style>
    <style jsx global>
      {stylesGlobal}
    </style>
  </GraphQLProvider>
);

export default withGraphQLApp(App);
