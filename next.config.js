const { withGraphQLConfig } = require('next-graphql-react/server');

module.exports = withGraphQLConfig({
  env: {
    ORIGIN: process.env.ORIGIN || `https://${process.env.VERCEL_URL}`,
  },
});
