import ButtonSubmit from 'device-agnostic-ui/public/components/ButtonSubmit.js';
import LinkText from 'device-agnostic-ui/public/components/LinkText.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import Table from 'device-agnostic-ui/public/components/Table.js';
import useAutoLoad from 'graphql-react/public/useAutoLoad.js';
import useCacheEntry from 'graphql-react/public/useCacheEntry.js';
import useLoadGraphQL from 'graphql-react/public/useLoadGraphQL.js';
import useLoadingEntry from 'graphql-react/public/useLoadingEntry.js';
import useWaterfallLoad from 'graphql-react/public/useWaterfallLoad.js';
import { useCallback } from 'react';
import { GraphQLErrors } from './GraphQLErrors';

const fetchUri = 'https://api.github.com/graphql';
const query = /* GraphQL */ `
  query($repoId: ID!) {
    repo: node(id: $repoId) {
      ... on Repository {
        url
        nameWithOwner
        stargazers {
          totalCount
        }
      }
    }
    rateLimit {
      remaining
    }
  }
`;

export function GithubRepo({ repoId }) {
  const cacheKey = `GithubRepo-${repoId}`;
  const cacheValue = useCacheEntry(cacheKey);
  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadGraphQL = useLoadGraphQL();
  const load = useCallback(
    () =>
      loadGraphQL(cacheKey, fetchUri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query,
          variables: {
            repoId,
          },
        }),
      }),
    [cacheKey, loadGraphQL, repoId]
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : (
    <>
      {!!cacheValue && (
        <>
          {cacheValue.data && (
            <>
              {cacheValue.data.repo && (
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row">Repo</th>
                      <td>
                        <LinkText href={cacheValue.data.repo.url}>
                          {cacheValue.data.repo.nameWithOwner}
                        </LinkText>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Stars</th>
                      <td>{cacheValue.data.repo.stargazers.totalCount}</td>
                    </tr>
                  </tbody>
                </Table>
              )}
              <Para>
                <strong>{cacheValue.data.rateLimit.remaining}</strong> GitHub
                API rate limit points remaining for this 60 min window.
              </Para>
            </>
          )}
          {!!cacheValue.errors && <GraphQLErrors errors={cacheValue.errors} />}
        </>
      )}
      <ButtonSubmit
        loading={!!loadingCacheValues}
        onClick={load}
        title="Reload"
      >
        ↻
      </ButtonSubmit>
    </>
  );
}
