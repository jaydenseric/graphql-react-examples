import { Query } from 'graphql-react'
import { timeFetchOptionsOverride } from '../api-fetch-options'
import FetchError from './fetch-error'
import GraphQLErrors from './graphql-errors'
import HTTPError from './http-error'
import Loader from './loader'
import ParseError from './parse-error'

const ExampleGraphQLError = () => (
  <Query
    loadOnMount
    loadOnReset
    fetchOptionsOverride={timeFetchOptionsOverride}
    operation={{
      query: /* GraphQL */ `
        {
          exampleError
        }
      `
    }}
  >
    {({ loading, fetchError, httpError, parseError, graphQLErrors }) => (
      <article>
        {loading && <Loader />}
        {fetchError && <FetchError error={fetchError} />}
        {httpError && <HTTPError error={httpError} />}
        {parseError && <ParseError error={parseError} />}
        {graphQLErrors && <GraphQLErrors errors={graphQLErrors} />}
      </article>
    )}
  </Query>
)

export default ExampleGraphQLError
