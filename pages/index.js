// ignore unused exports default

import Code from 'device-agnostic-ui/Code.mjs';
import Heading from 'device-agnostic-ui/Heading.mjs';
import LinkText from 'device-agnostic-ui/LinkText.mjs';
import Margin from 'device-agnostic-ui/Margin.mjs';
import Para from 'device-agnostic-ui/Para.mjs';
import Picture from 'device-agnostic-ui/Picture.mjs';
import { CacheDeleteButton } from '../components/CacheDeleteButton';
import { CacheStaleButton } from '../components/CacheStaleButton';
import { Country } from '../components/Country';
import { ExampleGraphQLError } from '../components/ExampleGraphQLError';
import { GithubRepo } from '../components/GithubRepo';
import { Header } from '../components/Header';
import { Page } from '../components/Page';
import { SearchGithubRepos } from '../components/SearchGithubRepos';
import { Section } from '../components/Section';

export default function IndexPage() {
  return (
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
            Multiple GraphQL APIs can be used within an app; notice several are
            used in the following examples. With custom React hooks for loading,
            even non GraphQL APIs can be used.
          </Para>
        </Header>
      </Section>
      <Section>
        <Header>
          <Heading level={2} size={2} id="loading-on-mount">
            Loading on mount
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
      <Section>
        <Header>
          <Heading level={2} size={2} id="loading-on-demand">
            Loading on demand
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
          <Heading level={2} size={2} id="stale-cache">
            Stale cache
          </Heading>
          <Para>Cache entries can be made stale, triggering reloading.</Para>
        </Header>
        <Margin>
          <CacheStaleButton />
        </Margin>
      </Section>
      <Section>
        <Header>
          <Heading level={2} size={2} id="delete-cache">
            Delete cache
          </Heading>
          <Para>It’s wise to delete all the cache after a user logs out.</Para>
        </Header>
        <Margin>
          <CacheDeleteButton />
        </Margin>
      </Section>
      <Section>
        <Header>
          <Heading level={2} size={2} id="loading-abortion">
            Loading abortion
          </Heading>
          <Para>
            Here the{' '}
            <LinkText href="https://docs.github.com/en/graphql">
              GitHub GraphQL API
            </LinkText>{' '}
            is used to search GitHub repositories, automatically loading
            results. Notice that modifying the input aborts the{' '}
            <LinkText href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
              <Code>fetch</Code>
            </LinkText>{' '}
            request for unfinished loading.
          </Para>
        </Header>
        <Margin>
          <SearchGithubRepos />
        </Margin>
      </Section>
      <Section>
        <Header>
          <Heading level={2} size={2} id="ssr-errors">
            SSR errors
          </Heading>
          <Para>
            Unlike many other GraphQL libraries, loading errors are cached and
            can be server side rendered without causing a server/client HTML
            mismatch. Here is deliberately invalid GraphQL query…
          </Para>
        </Header>
        <Margin>
          <ExampleGraphQLError />
        </Margin>
      </Section>
    </Page>
  );
}
