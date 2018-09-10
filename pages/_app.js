import { Provider as GraphQLProvider } from 'graphql-react'
import App, { Container } from 'next/app'
import withGraphQL from '../withGraphQL'

class GraphQLReactExampleApp extends App {
  render() {
    const { Component, pageProps, graphql } = this.props
    return (
      <Container>
        <GraphQLProvider value={graphql}>
          <Component {...pageProps} />
        </GraphQLProvider>
      </Container>
    )
  }
}

export default withGraphQL(GraphQLReactExampleApp)
