import { ButtonSubmit, LinkText, Table } from 'device-agnostic-ui'
import { useGraphQL } from 'graphql-react'
import { graphqlHubFetchOptionsOverride } from '../config'
import { Errors } from './Errors'

export const SubredditTopPosts = ({ name, limit = 5 }) => {
  const { load, loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: graphqlHubFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          reddit {
            subreddit(name: "${name}") {
              topListings(limit: ${limit}) {
                fullnameId
                url
                title
                score
              }
            }
          }
        }
      `
    }
  })

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
  )
}
