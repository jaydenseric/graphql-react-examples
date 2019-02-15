import { useGraphQL } from 'graphql-react'
import { pokemonFetchOptionsOverride } from '../api-fetch-options'
import FetchError from './fetch-error'
import GraphQLErrors from './graphql-errors'
import HTTPError from './http-error'
import Loader from './loader'
import ParseError from './parse-error'

const Pokemon = ({ name }) => {
  const {
    loading,
    cacheValue: { data, fetchError, httpError, parseError, graphQLErrors } = {}
  } = useGraphQL({
    fetchOptionsOverride: pokemonFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          pokemon(name: "${name}") {
            number
            classification
            image
          }
        }
      `
    }
  })

  return (
    <article>
      {loading && <Loader />}
      {fetchError && <FetchError error={fetchError} />}
      {httpError && <HTTPError error={httpError} />}
      {parseError && <ParseError error={parseError} />}
      {graphQLErrors && <GraphQLErrors errors={graphQLErrors} />}
      {data && data.pokemon && (
        <table>
          <tbody>
            <tr>
              <th>Number</th>
              <td>{data.pokemon.number}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Classification</th>
              <td>{data.pokemon.classification}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>
                <img src={data.pokemon.image} width="50" alt={name} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <style jsx>{`
        th {
          text-align: right;
        }
        th,
        td {
          vertical-align: top;
        }
      `}</style>
    </article>
  )
}

export default Pokemon
