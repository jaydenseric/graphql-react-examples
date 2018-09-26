import 'cross-fetch/polyfill'
import { GraphQL, preload, Provider as GraphQLProvider } from 'graphql-react'
import App, { Container } from 'next/app'
import Head from 'next/head'

export default class CustomApp extends App {
  static async getInitialProps({ ctx, router, Component }) {
    const props = {}

    if (Component.getInitialProps)
      props.pageProps = await Component.getInitialProps(ctx)

    if (ctx.req) {
      const graphql = new GraphQL()
      await preload(
        <CustomApp
          {...props}
          graphql={graphql}
          router={router}
          Component={Component}
        />
      )
      Head.rewind()
      props.graphqlCache = graphql.cache
    }

    return props
  }

  graphql =
    this.props.graphql || new GraphQL({ cache: this.props.graphqlCache })

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <GraphQLProvider value={this.graphql}>
          <Component {...pageProps} />
        </GraphQLProvider>
      </Container>
    )
  }
}
