import LinkText from "device-agnostic-ui/LinkText.mjs";
import List from "device-agnostic-ui/List.mjs";
import Loading from "device-agnostic-ui/Loading.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { useCallback } from "react";
import { GraphQLErrors } from "./GraphQLErrors";

const fetchUri = "https://api.github.com/graphql";
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

export function SearchGithubReposResult({ searchQuery }) {
  const cacheKey = `SearchGithubReposResult-${searchQuery}`;
  const cacheValue = useCacheEntry(cacheKey);
  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadGraphQL = useLoadGraphQL();

  const load = useCallback(
    () =>
      loadGraphQL(cacheKey, fetchUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query,
          variables: {
            searchQuery,
          },
        }),
      }),
    [cacheKey, loadGraphQL, searchQuery]
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : (
    <>
      {!!searchQuery && !!cacheValue && (
        <>
          {cacheValue.data?.search?.nodes &&
            (cacheValue.data.search.nodes.length ? (
              <List>
                {cacheValue.data.search.nodes.map(({ url, nameWithOwner }) => (
                  <li key={url}>
                    <LinkText href={url}>{nameWithOwner}</LinkText>
                  </li>
                ))}
              </List>
            ) : (
              <Para>No results.</Para>
            ))}
          {!!cacheValue.errors && <GraphQLErrors errors={cacheValue.errors} />}
        </>
      )}
      {!!loadingCacheValues && (
        <Margin>
          <Loading />
        </Margin>
      )}
    </>
  );
}
