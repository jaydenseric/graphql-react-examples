import {
  Code,
  Heading,
  LinkText,
  Margin,
  Para,
  Picture
} from 'device-agnostic-ui'
import { ExampleGraphQLError } from '../components/ExampleGraphQLError'
import { Page } from '../components/Page'
import { PageHeader } from '../components/PageHeader'
import { PokemonImage } from '../components/PokemonImage'
import { ResetCacheButton } from '../components/ResetCacheButton'
import { Section } from '../components/Section'
import { SubredditTopPosts } from '../components/SubredditTopPosts'
import { H2_FONT_SIZE } from '../config'

const IndexPage = () => (
  <Page
    title="graphql-react examples"
    description="This Next.js web app demonstrates server side rendering and functionality of the graphql-react and next-graphql-react npm packages."
  >
    <Margin>
      <Picture
        width={150}
        height={150}
        alt="graphql-react logo"
        src="https://cdn.jsdelivr.net/gh/jaydenseric/graphql-react@0.1.0/graphql-react-logo.svg"
      />
    </Margin>
    <PageHeader heading="graphql-react examples">
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
    </PageHeader>
    <Section
      header={
        <>
          <Heading style={{ fontSize: H2_FONT_SIZE }} id="multi-api">
            Multi API
          </Heading>
          <Para>
            Multiple GraphQL APIs can be used with a single{' '}
            <LinkText href="https://github.com/jaydenseric/graphql-react#class-graphql">
              <Code>GraphQL</Code>
            </LinkText>{' '}
            instance.
          </Para>
        </>
      }
    >
      <Section header={<Heading id="reddit-api">Reddit API</Heading>}>
        <Margin>
          <SubredditTopPosts name="graphql" />
        </Margin>
      </Section>
      <Section header={<Heading id="pokemon-api">Pokémon API</Heading>}>
        <Margin>
          <PokemonImage name="Pikachu" />
        </Margin>
      </Section>
    </Section>
    <Section
      header={
        <>
          <Heading style={{ fontSize: H2_FONT_SIZE }} id="ssr-errors">
            SSR errors
          </Heading>
          <Para>
            A novel characteristic is that errors cache and therefore server
            side render.
          </Para>
        </>
      }
    >
      <Margin>
        <ExampleGraphQLError />
      </Margin>
    </Section>
    <Section
      header={
        <Heading style={{ fontSize: H2_FONT_SIZE }} id="cache-reset">
          Cache reset
        </Heading>
      }
    >
      <Margin>
        <ResetCacheButton />
      </Margin>
    </Section>
  </Page>
)

export default IndexPage
