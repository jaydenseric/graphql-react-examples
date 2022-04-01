// @ts-check

import Loading, { css as cssLoading } from "device-agnostic-ui/Loading.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { createElement as h, Fragment, useCallback } from "react";

import GraphQLErrors from "./GraphQLErrors.mjs";

export const css = new Set([
  ...cssLoading,
]);

const cacheKey = "ExampleGraphQLError";
const query = /* GraphQL */ `
  {
    asdf
  }
`;

/**
 * @typedef {{
 *   asdf: string
 * }} QueryData
 */

const fetchUri = "https://countries.trevorblades.com";
const fetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ query }),
};

/** React component for example GraphQL errors. */
export default function ExampleGraphQLError() {
  const cacheValue =
    /**
     * @type {import("graphql-react/fetchGraphQL.mjs").FetchGraphQLResult
     *   & { data?: QueryData } | undefined}
     */
    (useCacheEntry(cacheKey));
  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadGraphQL = useLoadGraphQL();
  const load = useCallback(
    () => loadGraphQL(cacheKey, fetchUri, fetchOptions),
    [loadGraphQL],
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : h(
    "article",
    null,
    !!cacheValue &&
      h(
        Fragment,
        null,
        cacheValue.data?.asdf,
        !!cacheValue.errors && h(GraphQLErrors, { errors: cacheValue.errors }),
      ),
    !!loadingCacheValues && h(Loading),
  );
}
