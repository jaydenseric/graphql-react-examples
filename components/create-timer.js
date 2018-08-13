import { Query } from 'graphql-react'
import { timeFetchOptionsOverride } from '../api-fetch-options'
import Loader from './loader'

const CreateTimer = () => (
  <Query
    resetOnLoad
    fetchOptionsOverride={timeFetchOptionsOverride}
    query={
      /* GraphQL */ `
        mutation createTimer {
          createTimer {
            id
          }
        }
      `
    }
  >
    {({ loading, data, load }) => (
      <section>
        {data && (
          <p>
            Created timer ID “{data.createTimer.id}
            ”.
          </p>
        )}
        {loading ? <Loader /> : <button onClick={load}>Create timer</button>}
      </section>
    )}
  </Query>
)

export default CreateTimer
