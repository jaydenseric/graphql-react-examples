import { ButtonSubmit, LinkText, Table } from 'device-agnostic-ui';
import { useGraphQL } from 'graphql-react';
import React from 'react';
import { graphqlHubFetchOptionsOverride } from '../config';
import { Errors } from './Errors';

const query = /* GraphQL */ `
  query($name: String!, $limit: Int!) {
    reddit {
      subreddit(name: $name) {
        topListings(limit: $limit) {
          fullnameId
          url
          title
          score
        }
      }
    }
  }
`;

export const SubredditTopPosts = ({ name, limit = 5 }) => {
  const operation = React.useMemo(
    () => ({
      query,
      variables: {
        name,
        limit,
      },
    }),
    [limit, name]
  );

  const { load, loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: graphqlHubFetchOptionsOverride,
    operation,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return (
    <>
      {data && (
        <Table>
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: 'right' }}>
                Score
              </th>
              <th scope="col">Post</th>
            </tr>
          </thead>
          <tbody>
            {data.reddit.subreddit.topListings.map(
              ({ fullnameId, url, title, score }) => (
                <tr key={fullnameId}>
                  <td style={{ textAlign: 'right' }}>{score}</td>
                  <td>
                    <LinkText href={url}>
                      <em>{title}</em>
                    </LinkText>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      )}
      <ButtonSubmit loading={loading} onClick={load} title="Refresh">
        ↻
      </ButtonSubmit>
      <Errors {...errors} />
    </>
  );
};
