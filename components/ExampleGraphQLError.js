import Loading from "device-agnostic-ui/Loading.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { useCallback } from "react";
import { GraphQLErrors } from "./GraphQLErrors";

const cacheKey = "ExampleGraphQLError";
const query = /* GraphQL */ `
  {
    asdf
  }
`;
const fetchUri = "https://countries.trevorblades.com";
const fetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({ query }),
};

export function ExampleGraphQLError() {
  const cacheValue = useCacheEntry(cacheKey);
  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadGraphQL = useLoadGraphQL();
  const load = useCallback(
    () => loadGraphQL(cacheKey, fetchUri, fetchOptions),
    [loadGraphQL]
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : (
    <article>
      {!!cacheValue && (
        <>
          {cacheValue.data?.asdf}
          {!!cacheValue.errors && <GraphQLErrors errors={cacheValue.errors} />}
        </>
      )}
      {!!loadingCacheValues && <Loading />}
    </article>
  );
}
