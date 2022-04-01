// @ts-check

import Loading, { css as cssLoading } from "device-agnostic-ui/Loading.mjs";
import Table, { css as cssTable } from "device-agnostic-ui/Table.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { createElement as h, Fragment, useCallback } from "react";

import useLoadCountriesApi from "../hooks/useLoadCountriesApi.mjs";
import GraphQLErrors, { css as cssGraphQLErrors } from "./GraphQLErrors.mjs";

export const css = new Set([
  ...cssLoading,
  ...cssTable,
  ...cssGraphQLErrors,
]);

const query = /* GraphQL */ `
  query ($countryCode: ID!) {
    country(code: $countryCode) {
      name
      emoji
      capital
    }
  }
`;

/**
 * @typedef {{
 *   country: {
 *     name: string,
 *     emoji: string,
 *     capital: string
 *   }
 * }} QueryData
 */

/**
 * React component for displaying facts about a country.
 * @param {object} props Props.
 * @param {string} props.countryCode Two-letter
 *   [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 *   country code.
 */
export default function Country({ countryCode }) {
  const cacheKey = `Country-${countryCode}`;
  const cacheValue =
    /**
     * @type {import("graphql-react/fetchGraphQL.mjs").FetchGraphQLResult
     *   & { data?: QueryData } | undefined}
     */
    (useCacheEntry(cacheKey));

  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadCountriesApi = useLoadCountriesApi();
  const load = useCallback(
    () =>
      loadCountriesApi(cacheKey, {
        query,
        variables: {
          countryCode,
        },
      }),
    [cacheKey, countryCode, loadCountriesApi],
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : h(
    "section",
    null,
    !!cacheValue &&
      h(
        Fragment,
        null,
        cacheValue.data &&
          h(
            Table,
            null,
            h(
              "tbody",
              null,
              h(
                "tr",
                null,
                h("th", { scope: "row" }, "Country"),
                h("td", null, cacheValue.data.country.name),
              ),
              h(
                "tr",
                null,
                h("th", { scope: "row" }, "Emoji"),
                h("td", null, cacheValue.data.country.emoji),
              ),
              h(
                "tr",
                null,
                h("th", { scope: "row" }, "Capital"),
                h("td", null, cacheValue.data.country.capital),
              ),
            ),
          ),
        cacheValue.errors && h(GraphQLErrors, { errors: cacheValue.errors }),
      ),
    !!loadingCacheValues && h(Loading),
  );
}
