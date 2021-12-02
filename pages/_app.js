// ignore unused exports default

import "../utils/node-polyfills";
import "device-agnostic-ui/theme.css";
import "device-agnostic-ui/global.css";
import "device-agnostic-ui/Button.css";
import "device-agnostic-ui/ButtonSubmit.css";
import "device-agnostic-ui/Code.css";
import "device-agnostic-ui/Fieldset.css";
import "device-agnostic-ui/Heading.css";
import "device-agnostic-ui/LinkText.css";
import "device-agnostic-ui/List.css";
import "device-agnostic-ui/Loading.css";
import "device-agnostic-ui/Margin.css";
import "device-agnostic-ui/Para.css";
import "device-agnostic-ui/Picture.css";
import "device-agnostic-ui/Table.css";
import "device-agnostic-ui/Textbox.css";
import withGraphQLReact from "next-graphql-react/withGraphQLReact.mjs";
import Head from "next/head";

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
