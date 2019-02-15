import { GraphQLContext } from 'graphql-react'

const ResetCacheButton = () => (
  <GraphQLContext.Consumer>
    {graphql => <button onClick={graphql.reset}>Reset cache</button>}
  </GraphQLContext.Consumer>
)

export default ResetCacheButton
