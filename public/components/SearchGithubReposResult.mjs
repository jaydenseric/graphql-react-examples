// @ts-check

/** @import { FetchGraphQLResult } from "graphql-react/fetchGraphQL.mjs" */

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import ListUnordered, {
  css as cssListUnordered,
} from "device-agnostic-ui/ListUnordered.mjs";
import Loading, { css as cssLoading } from "device-agnostic-ui/Loading.mjs";
import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { createElement as h, Fragment, useCallback } from "react";

import useLoadGithubApi from "../hooks/useLoadGithubApi.mjs";
import GraphQLErrors, { css as cssGraphQLErrors } from "./GraphQLErrors.mjs";

export const css = new Set([
  ...cssLinkText,
  ...cssListUnordered,
  ...cssLoading,
  ...cssMargin,
  ...cssPara,
  ...cssGraphQLErrors,
]);

const query = /* GraphQL */ `
  query ($searchQuery: String!) {
    search(first: 5, type: REPOSITORY, query: $searchQuery) {
      nodes {
        ... on Repository {
          url
          nameWithOwner
        }
      }
    }
  }
`;

/**
 * @typedef {{
 *   search: {
 *     nodes: Array<{
 *       url: string,
 *       nameWithOwner: string
 *     }>
 *   }
 * }} QueryData
 */

/**
 * React component for displaying a GitHub repo search result.
 * @param {object} props Props.
 * @param {string} props.searchQuery Search query.
 */
export default function SearchGithubReposResult({ searchQuery }) {
  const cacheKey = `SearchGithubReposResult-${searchQuery}`;
  const cacheValue =
    /** @type {FetchGraphQLResult & { data?: QueryData } | undefined} */
    (useCacheEntry(cacheKey));

  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadGithubApi = useLoadGithubApi();
  const load = useCallback(
    () =>
      loadGithubApi(cacheKey, {
        query,
        variables: {
          searchQuery,
        },
      }),
    [cacheKey, loadGithubApi, searchQuery],
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : h(
    Fragment,
    null,
    !!searchQuery && !!cacheValue &&
      h(
        Fragment,
        null,
        cacheValue.data?.search?.nodes &&
          (cacheValue.data.search.nodes.length
            ? h(
              ListUnordered,
              null,
              cacheValue.data.search.nodes.map(({ url, nameWithOwner }) =>
                h("li", { key: url }, h(LinkText, { href: url }, nameWithOwner))
              ),
            )
            : h(Para, null, "No results.")),
        !!cacheValue.errors && h(GraphQLErrors, { errors: cacheValue.errors }),
      ),
    !!loadingCacheValues && h(Margin, null, h(Loading)),
  );
}
