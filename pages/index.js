import ExampleErrors from '../components/ExampleErrors'
import Page from '../components/Page'
import PokemonImage from '../components/PokemonImage'
import ResetCacheButton from '../components/ResetCacheButton'
import SubredditTopPosts from '../components/SubredditTopPosts'

const IndexPage = () => (
  <Page
    title="graphql-react examples"
    description="This Next.js web app demonstrates server side rendering and functionality of the graphql-react and next-graphql-react npm packages."
  >
    <header>
      <img
        src="https://cdn.jsdelivr.net/gh/jaydenseric/graphql-react@0.1.0/graphql-react-logo.svg"
        width="150"
        height="150"
        alt="graphql-react logo"
      />
      <h1>graphql-react examples</h1>
      <p>
        This <a href="https://nextjs.org">Next.js</a> web app demonstrates
        server side rendering and functionality of the{' '}
        <a href="https://github.com/jaydenseric/graphql-react">
          <code>graphql-react</code>
        </a>{' '}
        and{' '}
        <a href="https://github.com/jaydenseric/next-graphql-react">
          <code>next-graphql-react</code>
        </a>{' '}
        npm packages.
      </p>
      <p>
        <a href="https://github.com/jaydenseric/graphql-react-examples">
          See the source code on GitHub.
        </a>
      </p>
    </header>
    <section>
      <h2>Multiple APIs</h2>
      <p>
        Multiple GraphQL APIs can be used with a single{' '}
        <a href="https://github.com/jaydenseric/graphql-react#class-graphql">
          <code>GraphQL</code>
        </a>{' '}
        instance.
      </p>
      <h3>Reddit</h3>
      <SubredditTopPosts name="graphql" />
      <h3>Pokémon</h3>
      <PokemonImage name="Pikachu" />
    </section>
    <section>
      <h2>SSR errors</h2>
      <p>
        A novel characteristic is that errors cache and therefore server side
        render.
      </p>
      <ExampleErrors />
    </section>
    <section>
      <h2>Reset cache</h2>
      <ResetCacheButton />
    </section>
  </Page>
)

export default IndexPage
