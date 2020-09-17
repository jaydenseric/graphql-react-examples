// ignore unused exports default

import {
  Code,
  Heading,
  LinkText,
  Margin,
  Para,
  Picture,
} from 'device-agnostic-ui';
import { CacheReloadButton } from '../components/CacheReloadButton';
import { CacheResetButton } from '../components/CacheResetButton';
import { Country } from '../components/Country';
import { ExampleGraphQLError } from '../components/ExampleGraphQLError';
import { GithubRepo } from '../components/GithubRepo';
import { Header } from '../components/Header';
import { Page } from '../components/Page';
import { Section } from '../components/Section';

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
          <Heading level={3} size={3} id="github-api">
            GitHub API
          </Heading>
          <Para>
            Here the{' '}
            <LinkText href="https://docs.github.com/en/graphql">
              GitHub GraphQL API
            </LinkText>{' '}
            is used to query repo metadata, along with API rate limit details…
          </Para>
        </Header>
        <Margin>
          <GithubRepo repoId="MDEwOlJlcG9zaXRvcnkxMTk5Mzg5Mzk=" />
        </Margin>
      </Section>
      <Section>
        <Header>
          <Heading level={3} size={3} id="pokemon-api">
            Countries API
          </Heading>
          <Para>
            Here the{' '}
            <LinkText href="https://github.com/trevorblades/countries">
              Countries GraphQL API
            </LinkText>{' '}
            is used to query country data…
          </Para>
        </Header>
        <Margin>
          <Country countryCode="AU" />
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
          render…
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
);

export default IndexPage;
