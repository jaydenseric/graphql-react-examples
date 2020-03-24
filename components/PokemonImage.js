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
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  })

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
  )
}
