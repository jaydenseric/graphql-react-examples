import { Button } from 'device-agnostic-ui';
import { GraphQLContext } from 'graphql-react';
import React from 'react';

export const CacheReloadButton = () => {
  const graphql = React.useContext(GraphQLContext);
  return <Button onClick={graphql.reload}>Reload</Button>;
};
