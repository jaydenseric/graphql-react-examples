import { useGraphQL } from 'graphql-react'
import { graphqlHubFetchOptionsOverride } from '../graphql-fetch-options'
import Errors from './Errors'

const SubredditTopPosts = ({ name, limit = 5 }) => {
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
        <ol>
          {data.reddit.subreddit.topListings.map(
            ({ fullnameId, url, title, score }) => (
              <li key={fullnameId}>
                <a href={url}>{title}</a> <em>{score} karma</em>
              </li>
            )
          )}
        </ol>
      )}
      <button disabled={loading} onClick={load} title="Refresh">
        ↻
      </button>
      <Errors {...errors} />
    </>
  )
}

export default SubredditTopPosts
