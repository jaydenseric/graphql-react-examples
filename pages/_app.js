// ignore unused exports default

import '../utils/node-polyfills';
import 'device-agnostic-ui/public/theme.css';
import 'device-agnostic-ui/public/global.css';
import 'device-agnostic-ui/public/components/Button.css';
import 'device-agnostic-ui/public/components/ButtonSubmit.css';
import 'device-agnostic-ui/public/components/Code.css';
import 'device-agnostic-ui/public/components/Fieldset.css';
import 'device-agnostic-ui/public/components/Heading.css';
import 'device-agnostic-ui/public/components/LinkText.css';
import 'device-agnostic-ui/public/components/List.css';
import 'device-agnostic-ui/public/components/Loading.css';
import 'device-agnostic-ui/public/components/Margin.css';
import 'device-agnostic-ui/public/components/Para.css';
import 'device-agnostic-ui/public/components/Picture.css';
import 'device-agnostic-ui/public/components/Table.css';
import 'device-agnostic-ui/public/components/Textbox.css';
import withGraphQLReact from 'next-graphql-react/public/withGraphQLReact.js';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}

export default withGraphQLReact(App);
