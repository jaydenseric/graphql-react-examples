import { Loading, Picture } from 'device-agnostic-ui';
import { useGraphQL } from 'graphql-react';
import React from 'react';
import { pokemonFetchOptionsOverride } from '../config';
import { Errors } from './Errors';

const query = /* GraphQL */ `
  query($name: String!) {
    pokemon(name: $name) {
      image
    }
  }
`;

export const PokemonImage = ({ name }) => {
  const operation = React.useMemo(
    () => ({
      query,
      variables: {
        name,
      },
    }),
    [name]
  );

  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: pokemonFetchOptionsOverride,
    operation,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return (
    <>
      {data && (
        <Picture width={360} height={337} style={{ width: '100px' }}>
          <img src={data.pokemon.image} alt={name} />
        </Picture>
      )}
      <Errors {...errors} />
      {loading && <Loading />}
    </>
  );
};
