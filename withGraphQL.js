import 'cross-fetch/polyfill'
import { GraphQL, preload } from 'graphql-react'
import React from 'react'
import getDisplayName from 'react-display-name'
import Head from 'next/head'

let clientGraphql

export default App =>
  class WithGraphQL extends React.Component {
    static displayName = `WithGraphQL(${getDisplayName(App)})`

    static async getInitialProps(context) {
      const props = App.getInitialProps
        ? await App.getInitialProps(context)
        : {}

      // If server environment, preload the page.
      if (context.ctx.req) {
        const graphql = new GraphQL()
        await preload(
          <App
            {...props}
            Component={context.Component}
            router={context.router}
            graphql={graphql}
          />
        )
        Head.rewind()
        props.cache = graphql.cache
      }

      return props
    }

    constructor(props) {
      super(props)

      // Set the GraphQL instance used in render().
      this.graphql =
        typeof window !== 'undefined'
          ? // Client: Shared instance, created at first render after SSR.
            (clientGraphql =
              clientGraphql || new GraphQL({ cache: props.cache }))
          : // Server: Private instance for SSR.
            new GraphQL({ cache: props.cache })
    }

    render() {
      return <App {...this.props} graphql={this.graphql} />
    }
  }
