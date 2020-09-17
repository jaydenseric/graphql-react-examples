export const pokemonFetchOptionsOverride = (options) => {
  // Temporary URL, see:
  // https://github.com/lucasbento/graphql-pokemon/pull/14
  options.url = 'https://graphql-pokemon2.vercel.app';
};

export const graphqlHubFetchOptionsOverride = (options) => {
  options.url = 'https://graphqlhub.com/graphql';
};
