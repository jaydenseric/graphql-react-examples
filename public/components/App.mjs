// @ts-check

/** @import { AppComponent } from "ruck/serve.mjs" */

import { createElement as h, Fragment, useMemo } from "react";
import useCss from "ruck/useCss.mjs";
import useHead from "ruck/useHead.mjs";
import useRoute from "ruck/useRoute.mjs";

const css = new Set([
  "https://unpkg.com/device-agnostic-ui@10.1.0/theme.css",
  "https://unpkg.com/device-agnostic-ui@10.1.0/global.css",
]);

/**
 * React component for the Ruck app.
 * @type {AppComponent}
 */
export default function App() {
  const route = useRoute();

  useHead(
    "1-1-meta",
    useMemo(() =>
      h(
        Fragment,
        null,
        h("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        }),
        h("meta", { name: "color-scheme", content: "light dark" }),
        h("meta", { name: "theme-color", content: "white" }),
        h("meta", {
          name: "og:image",
          content: `${route.url.origin}/social-preview.png`,
        }),
        h("meta", { name: "twitter:card", content: "summary" }),
        h("meta", { name: "twitter:site", content: "@jaydenseric" }),
        h("meta", { name: "twitter:creator", content: "@jaydenseric" }),
        h("link", { rel: "icon", href: "/favicon.ico" }),
        h("link", {
          rel: "icon",
          type: "image/svg+xml",
          sizes: "any",
          href: "/graphql-react-logo.svg",
        }),
        h("link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }),
        h("link", { rel: "manifest", href: "/manifest.webmanifest" }),
      ), [route.url.origin]),
  );

  for (const href of css) useCss(href);

  // The fragment is only to satisfy the incorrect React types.
  return h(Fragment, null, route.content);
}
