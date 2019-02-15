import { GraphQLContext } from 'graphql-react'

const CacheResetter = () => (
  <GraphQLContext.Consumer>
    {graphql => <button onClick={graphql.reset}>Reset cache</button>}
  </GraphQLContext.Consumer>
)

export default CacheResetter
