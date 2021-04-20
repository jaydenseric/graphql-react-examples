import Loading from 'device-agnostic-ui/public/components/Loading.js';
import useAutoLoad from 'graphql-react/public/useAutoLoad.js';
import useCacheEntry from 'graphql-react/public/useCacheEntry.js';
import useLoadGraphQL from 'graphql-react/public/useLoadGraphQL.js';
import useLoadingEntry from 'graphql-react/public/useLoadingEntry.js';
import useWaterfallLoad from 'graphql-react/public/useWaterfallLoad.js';
import { useCallback } from 'react';
import { GraphQLErrors } from './GraphQLErrors';

const cacheKey = 'ExampleGraphQLError';
const query = /* GraphQL */ `
  {
    asdf
  }
`;
const fetchUri = 'https://countries.trevorblades.com';
const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
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
