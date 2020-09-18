import { ButtonSubmit, LinkText, Para, Table } from 'device-agnostic-ui';
import { useGraphQL } from 'graphql-react';
import React from 'react';
import { githubFetchOptionsOverride } from '../config';
import { Errors } from './Errors';

const query = /* GraphQL */ `
  query($repoId: ID!) {
    repo: node(id: $repoId) {
      ... on Repository {
        url
        nameWithOwner
        description
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

export const GithubRepo = ({ repoId }) => {
  const operation = React.useMemo(
    () => ({
      query,
      variables: {
        repoId,
      },
    }),
    [repoId]
  );

  const { load, loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    operation,
    fetchOptionsOverride: githubFetchOptionsOverride,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return (
    <>
      {data && (
        <>
          {data.repo && (
            <Table>
              <tbody>
                <tr>
                  <th scope="row">Repo</th>
                  <td>
                    <LinkText href={data.repo.url}>
                      {data.repo.nameWithOwner}
                    </LinkText>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  <td>
                    <Para>{data.repo.description}</Para>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Stars</th>
                  <td>{data.repo.stargazers.totalCount}</td>
                </tr>
              </tbody>
            </Table>
          )}
          <Para>
            <strong>{data.rateLimit.remaining}</strong> GitHub API rate limit
            points remaining for this 60 min window.
          </Para>
        </>
      )}
      <ButtonSubmit loading={loading} onClick={load} title="Refresh">
        ↻
      </ButtonSubmit>
      <Errors {...errors} />
    </>
  );
};
