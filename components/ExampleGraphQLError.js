import { Loading } from 'device-agnostic-ui';
import { useGraphQL } from 'graphql-react';
import { graphqlHubFetchOptionsOverride } from '../config';
import { Errors } from './Errors';

export const ExampleGraphQLError = () => {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: graphqlHubFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          asdf
        }
      `,
    },
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
