import { useGraphQL } from 'graphql-react'
import { graphqlHubFetchOptionsOverride } from '../graphql-fetch-options'
import Errors from './Errors'
import Loader from './Loader'

const ExampleGraphQLError = () => {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: graphqlHubFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          asdf
        }
      `
    }
  })

  return (
    <article>
      {data && data.asdf}
      <Errors {...errors} />
      {loading && <Loader />}
    </article>
  )
}

export default ExampleGraphQLError
