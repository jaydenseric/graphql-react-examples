import { GraphQLContext } from 'graphql-react'
import React from 'react'

const ResetCacheButton = () => {
  const graphql = React.useContext(GraphQLContext)
  return <button onClick={graphql.reset}>Reset cache</button>
}

export default ResetCacheButton
