export const githubFetchOptionsOverride = (options) => {
  options.url = 'https://api.github.com/graphql';
  options.headers.Authorization = `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`;
};

export const countriesFetchOptionsOverride = (options) => {
  options.url = 'https://countries.trevorblades.com';
};
