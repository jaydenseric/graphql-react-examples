import { Button } from 'device-agnostic-ui'
import { GraphQLContext } from 'graphql-react'
import React from 'react'

export const ResetCacheButton = () => {
  const graphql = React.useContext(GraphQLContext)
  return <Button onClick={graphql.reset}>Reset cache</Button>
}
