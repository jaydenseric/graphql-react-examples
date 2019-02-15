import { useGraphQL } from 'graphql-react'
import { timeFetchOptionsOverride } from '../api-fetch-options'
import Loader from './loader'

const CreateTimer = () => {
  const { load, loading, cacheValue: { data } = {} } = useGraphQL({
    loadOnMount: false,
    loadOnReset: false,
    resetOnLoad: true,
    fetchOptionsOverride: timeFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        mutation createTimer {
          createTimer {
            id
          }
        }
      `
    }
  })

  return (
    <section>
      {data && <p>Created timer ID “{data.createTimer.id}”.</p>}
      {loading ? <Loader /> : <button onClick={load}>Create timer</button>}
    </section>
  )
}

export default CreateTimer
