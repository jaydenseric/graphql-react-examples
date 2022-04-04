// @ts-check

import Code, { css as cssCode } from "device-agnostic-ui/Code.mjs";
import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import Picture, { css as cssPicture } from "device-agnostic-ui/Picture.mjs";
import { createElement as h, Fragment } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useTitle from "../hooks/useTitle.mjs";
import CacheDeleteButton, {
  css as cssCacheDeleteButton,
} from "../components/CacheDeleteButton.mjs";
import CacheStaleButton, {
  css as cssCacheStaleButton,
} from "../components/CacheStaleButton.mjs";
import Country, { css as cssCountry } from "../components/Country.mjs";
import ExampleGraphQLError, {
  css as cssExampleGraphQLError,
} from "../components/ExampleGraphQLError.mjs";
import GithubRepo, { css as cssGithubRepo } from "../components/GithubRepo.mjs";
import Header, { css as cssHeader } from "../components/Header.mjs";
import SearchGithubRepos, {
  css as cssSearchGithubRepos,
} from "../components/SearchGithubRepos.mjs";
import Section, { css as cssSection } from "./Section.mjs";

export const css = new Set([
  ...cssCode,
  ...cssHeading,
  ...cssLinkText,
  ...cssMargin,
  ...cssPara,
  ...cssPicture,
  ...cssCacheDeleteButton,
  ...cssCacheStaleButton,
  ...cssCountry,
  ...cssExampleGraphQLError,
  ...cssGithubRepo,
  ...cssHeader,
  ...cssSearchGithubRepos,
  ...cssSection,
]);

/** React component for the home page. */
export default function PageHome() {
  useTitle("Home");
  useDescription(
    "A Deno Ruck web app demonstrating graphql-react functionality using various GraphQL APIs.",
  );

  return h(
    Fragment,
    null,
    h(
      Margin,
      null,
      h(
        Picture,
        {
          width: 150,
          height: 150,
          style: {
            width: "150px",
          },
        },
        h("img", {
          alt: "graphql-react logo",
          src: "/graphql-react-logo.svg",
        }),
      ),
    ),
    h(
      Header,
      null,
      h(Heading, { size: 1 }, "graphql-react examples"),
      h(
        Para,
        null,
        "This ",
        h(LinkText, {
          href: "https://nextjs.org",
        }, "Next.js"),
        " web app demonstrates server side rendering and functionality of the",
        " ",
        h(LinkText, {
          href: "https://github.com/jaydenseric/graphql-react",
        }, h(Code, null, "graphql-react")),
        " ",
        "and",
        " ",
        h(LinkText, {
          href: "https://github.com/jaydenseric/next-graphql-react",
        }, h(Code, null, "next-graphql-react")),
        " ",
        "npm packages.",
      ),
      h(
        Para,
        null,
        h(LinkText, {
          href: "https://github.com/jaydenseric/graphql-react-examples",
        }, "See the source code on GitHub."),
      ),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, {
          level: 2,
          size: 2,
          id: "multi-api",
        }, "Multi API"),
        h(
          Para,
          null,
          "Multiple GraphQL APIs can be used within an app; notice several are used in the following examples. With custom React hooks for loading, even non GraphQL APIs can be used.",
        ),
      ),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, {
          level: 2,
          size: 2,
          id: "loading-on-mount",
        }, "Loading on mount"),
        h(
          Para,
          null,
          "Here the",
          " ",
          h(LinkText, {
            href: "https://github.com/trevorblades/countries",
          }, "Countries GraphQL API"),
          " ",
          "is used to query country data…",
        ),
      ),
      h(Margin, null, h(Country, { countryCode: "AU" })),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, {
          level: 2,
          size: 2,
          id: "loading-on-demand",
        }, "Loading on demand"),
        h(
          Para,
          null,
          "Here the",
          " ",
          h(LinkText, {
            href: "https://docs.github.com/en/graphql",
          }, "GitHub GraphQL API"),
          " ",
          "is used to query repo metadata, along with API rate limit details…",
        ),
      ),
      h(
        Margin,
        null,
        h(GithubRepo, { repoId: "MDEwOlJlcG9zaXRvcnkxMTk5Mzg5Mzk=" }),
      ),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, {
          level: 2,
          size: 2,
          id: "stale-cache",
        }, "Stale cache"),
        h(
          Para,
          null,
          "Cache entries can be made stale, triggering reloading.",
        ),
      ),
      h(Margin, null, h(CacheStaleButton)),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, {
          level: 2,
          size: 2,
          id: "delete-cache",
        }, "Delete cache"),
        h(
          Para,
          null,
          "It’s wise to delete all the cache after a user logs out.",
        ),
      ),
      h(Margin, null, h(CacheDeleteButton)),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, {
          level: 2,
          size: 2,
          id: "loading-abortion",
        }, "Loading abortion"),
        h(
          Para,
          null,
          "Here the",
          " ",
          h(LinkText, {
            href: "https://docs.github.com/en/graphql",
          }, "GitHub GraphQL API"),
          " ",
          "is used to search GitHub repositories, automatically loading results. Notice that modifying the input aborts the",
          " ",
          h(LinkText, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
          }, h(Code, null, "fetch")),
          " ",
          "request for unfinished loading.",
        ),
      ),
      h(Margin, null, h(SearchGithubRepos)),
    ),
    h(
      Section,
      null,
      h(
        Header,
        null,
        h(Heading, {
          level: 2,
          size: 2,
          id: "ssr-errors",
        }, "SSR errors"),
        h(
          Para,
          null,
          "Unlike many other GraphQL libraries, loading errors are cached and can be server side rendered without causing a server/client HTML mismatch. Here is deliberately invalid GraphQL query…",
        ),
      ),
      h(Margin, null, h(ExampleGraphQLError)),
    ),
  );
}
