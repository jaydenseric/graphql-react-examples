import { Loading } from 'device-agnostic-ui';
import { useGraphQL } from 'graphql-react';
import React from 'react';
import { pokemonFetchOptionsOverride } from '../config';
import { Errors } from './Errors';

const query = /* GraphQL */ `
  {
    asdf
  }
`;

const operation = {
  query,
};

export const ExampleGraphQLError = () => {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: pokemonFetchOptionsOverride,
    operation,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return (
    <article>
      {data && data.asdf}
      <Errors {...errors} />
      {loading && <Loading />}
    </article>
  );
};
