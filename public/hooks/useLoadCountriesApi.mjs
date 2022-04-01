import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import { useCallback } from "react";

/** React hook for using a loader to query the Countries GraphQL API. */
export default function useLoadCountriesApi() {
  const loadGraphQL = useLoadGraphQL();

  return useCallback(
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
