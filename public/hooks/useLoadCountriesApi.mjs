// @ts-check

/** @import { GraphQLOperation } from "graphql-react/types.mjs" */

import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import { useCallback } from "react";

/** React hook for using a loader to query the Countries GraphQL API. */
export default function useLoadCountriesApi() {
  const loadGraphQL = useLoadGraphQL();

  return useCallback(
    /**
     * Loads a Countries GraphQL API query.
     * @param {string} cacheKey Cache key.
     * @param {GraphQLOperation} graphqlOperation GraphQL operation.
     */
    (cacheKey, graphqlOperation) =>
      loadGraphQL(cacheKey, "https://countries.trevorblades.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(graphqlOperation),
      }),
    [loadGraphQL],
  );
}
