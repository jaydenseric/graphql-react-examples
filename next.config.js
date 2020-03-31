const { withGraphQLConfig } = require('next-graphql-react/server');

module.exports = withGraphQLConfig({
  env: {
    PROTOCOL: process.env.PROTOCOL,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
  },
});
