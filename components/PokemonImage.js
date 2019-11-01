import { Loading, Picture } from 'device-agnostic-ui'
import { useGraphQL } from 'graphql-react'
import { pokemonFetchOptionsOverride } from '../config'
import { Errors } from './Errors'

export const PokemonImage = ({ name }) => {
  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    fetchOptionsOverride: pokemonFetchOptionsOverride,
    operation: {
      query: /* GraphQL */ `
        {
          pokemon(name: "${name}") {
            image
          }
        }
      `
    }
  })

  return (
    <>
      {data && (
        <Picture
          width={360}
          height={337}
          alt={name}
          src={data.pokemon.image}
          style={{ width: '100px' }}
        />
      )}
      <Errors {...errors} />
      {loading && <Loading />}
    </>
  )
}
