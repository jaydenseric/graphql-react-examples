import { useGraphQL } from 'graphql-react'
import { timeFetchOptionsOverride } from '../api-fetch-options'
import FetchError from './fetch-error'
import GraphQLErrors from './graphql-errors'
import HTTPError from './http-error'
import Loader from './loader'
import ParseError from './parse-error'

const Timer = ({ id, milliseconds }) => {
  const { load, loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    loadOnMount: false,
    loadOnReset: false,
    fetchOptionsOverride: timeFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          timer(timerId: "${id}") {
            milliseconds
          }
        }
      `
    }
  })

  return (
    <tr>
      <td>{id}</td>
      <td style={{ textAlign: 'right' }}>
        {data ? data.timer.milliseconds : milliseconds}
      </td>
      <td>
        <button disabled={loading} onClick={load}>
          ↻
        </button>
        {!!Object.entries(errors).length && <strong>Error!</strong>}
      </td>
    </tr>
  )
}

const Timers = () => {
  const {
    loading,
    cacheValue: { data, fetchError, httpError, parseError, graphQLErrors } = {}
  } = useGraphQL({
    fetchOptionsOverride: timeFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          timers {
            id
            milliseconds
          }
        }
      `
    }
  })

  return (
    <section>
      {loading && <Loader />}
      {fetchError && <FetchError error={fetchError} />}
      {httpError && <HTTPError error={httpError} />}
      {parseError && <ParseError error={parseError} />}
      {graphQLErrors && <GraphQLErrors errors={graphQLErrors} />}
      {data &&
        (data.timers.length ? (
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Timer ID</th>
                <th style={{ textAlign: 'right' }} colSpan="2">
                  Duration (ms)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.timers.map(timer => (
                <Timer key={timer.id} {...timer} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>
            <em>Create a first timer…</em>
          </p>
        ))}
    </section>
  )
}

export default Timers
