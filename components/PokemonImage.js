import { useGraphQL } from 'graphql-react'
import { pokemonFetchOptionsOverride } from '../graphql-fetch-options'
import Errors from './Errors'
import Loader from './Loader'

const PokemonImage = ({ name }) => {
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
      {data && <img src={data.pokemon.image} width="50" alt={name} />}
      <Errors {...errors} />
      {loading && <Loader />}
    </>
  )
}

export default PokemonImage
