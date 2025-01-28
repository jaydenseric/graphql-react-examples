// @ts-check

/** @import { FetchGraphQLResult } from "graphql-react/fetchGraphQL.mjs" */

import Loading, { css as cssLoading } from "device-agnostic-ui/Loading.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { createElement as h, Fragment, useCallback } from "react";

import useLoadCountriesApi from "../hooks/useLoadCountriesApi.mjs";
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

/** React component for example GraphQL errors. */
export default function ExampleGraphQLError() {
  const cacheValue =
    /** @type {FetchGraphQLResult & { data?: QueryData } | undefined} */
    (useCacheEntry(cacheKey));
  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadCountriesApi = useLoadCountriesApi();
  const load = useCallback(
    () => loadCountriesApi(cacheKey, { query }),
    [cacheKey, loadCountriesApi],
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
