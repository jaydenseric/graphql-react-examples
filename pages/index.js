import {
  Code,
  Heading,
  LinkText,
  Margin,
  Para,
  Picture,
} from 'device-agnostic-ui'
import { CacheReloadButton } from '../components/CacheReloadButton'
import { CacheResetButton } from '../components/CacheResetButton'
import { ExampleGraphQLError } from '../components/ExampleGraphQLError'
import { Header } from '../components/Header'
import { Page } from '../components/Page'
import { PokemonImage } from '../components/PokemonImage'
import { Section } from '../components/Section'
import { SubredditTopPosts } from '../components/SubredditTopPosts'

const IndexPage = () => (
  <Page
    title="graphql-react examples"
    description="This Next.js web app demonstrates server side rendering and functionality of the graphql-react and next-graphql-react npm packages."
  >
    <Margin>
      <Picture width={150} height={150} style={{ width: '150px' }}>
        <img
          alt="graphql-react logo"
          src="https://cdn.jsdelivr.net/gh/jaydenseric/graphql-react@0.1.0/graphql-react-logo.svg"
        />
      </Picture>
    </Margin>
    <Header>
      <Heading size={1}>graphql-react examples</Heading>
      <Para>
        This <LinkText href="https://nextjs.org">Next.js</LinkText> web app
        demonstrates server side rendering and functionality of the{' '}
        <LinkText href="https://github.com/jaydenseric/graphql-react">
          <Code>graphql-react</Code>
        </LinkText>{' '}
        and{' '}
        <LinkText href="https://github.com/jaydenseric/next-graphql-react">
          <Code>next-graphql-react</Code>
        </LinkText>{' '}
        npm packages.
      </Para>
      <Para>
        <LinkText href="https://github.com/jaydenseric/graphql-react-examples">
          See the source code on GitHub.
        </LinkText>
      </Para>
    </Header>
    <Section>
      <Header>
        <Heading level={2} size={2} id="multi-api">
          Multi API
        </Heading>
        <Para>
          Multiple GraphQL APIs can be used with a single{' '}
          <LinkText href="https://github.com/jaydenseric/graphql-react#class-graphql">
            <Code>GraphQL</Code>
          </LinkText>{' '}
          instance.
        </Para>
      </Header>
      <Section>
        <Header>
          <Heading level={3} size={3} id="reddit-api">
            Reddit API
          </Heading>
        </Header>
        <Margin>
          <SubredditTopPosts name="graphql" />
        </Margin>
      </Section>
      <Section>
        <Header>
          <Heading level={3} size={3} id="pokemon-api">
            Pokémon API
          </Heading>
        </Header>
        <Margin>
          <PokemonImage name="Pikachu" />
        </Margin>
      </Section>
    </Section>
    <Section>
      <Header>
        <Heading level={2} size={2} id="ssr-errors">
          SSR errors
        </Heading>
        <Para>
          A novel characteristic is that errors cache and therefore server side
          render.
        </Para>
      </Header>
      <Margin>
        <ExampleGraphQLError />
      </Margin>
    </Section>
    <Section>
      <Header>
        <Heading level={2} size={2} id="cache-reset">
          Cache reset
        </Heading>
        <Para>
          Cache data is immediately deleted and fresh data is fetched.
        </Para>
      </Header>
      <Margin>
        <CacheResetButton />
      </Margin>
    </Section>
    <Section>
      <Header>
        <Heading level={2} size={2} id="cache-reload">
          Cache reload
        </Heading>
        <Para>Cache data is still used while fresh data is fetched.</Para>
      </Header>
      <Margin>
        <CacheReloadButton />
      </Margin>
    </Section>
  </Page>
)

export default IndexPage
