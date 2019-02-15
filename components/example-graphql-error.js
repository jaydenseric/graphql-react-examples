import { useGraphQL } from 'graphql-react'
import { timeFetchOptionsOverride } from '../api-fetch-options'
import GraphQLErrors from './graphql-errors'
import Loader from './loader'

const ExampleGraphQLError = () => {
  const { loading, cacheValue: { graphQLErrors } = {} } = useGraphQL({
    fetchOptionsOverride: timeFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          exampleError
        }
      `
    }
  })

  return (
    <article>
      {loading && <Loader />}
      {graphQLErrors && <GraphQLErrors errors={graphQLErrors} />}
    </article>
  )
}

export default ExampleGraphQLError
