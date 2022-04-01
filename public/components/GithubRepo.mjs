// @ts-check

import ButtonSubmit, {
  css as cssButtonSubmit,
} from "device-agnostic-ui/ButtonSubmit.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import Table, { css as cssTable } from "device-agnostic-ui/Table.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { createElement as h, Fragment, useCallback } from "react";

import useLoadGithubApi from "../hooks/useLoadGithubApi.mjs";
import GraphQLErrors from "./GraphQLErrors.mjs";

export const css = new Set([
  ...cssButtonSubmit,
  ...cssLinkText,
  ...cssPara,
  ...cssTable,
]);

const query = /* GraphQL */ `
  query ($repoId: ID!) {
    repo: node(id: $repoId) {
      ... on Repository {
        url
        nameWithOwner
        stargazers {
          totalCount
        }
      }
    }
    rateLimit {
      remaining
    }
  }
`;

/**
 * @typedef {{
 *   repo: {
 *     url: string,
 *     nameWithOwner: string,
 *     stargazers: {
 *       totalCount: number
 *     }
 *   },
 *   rateLimit: {
 *     remaining: number
 *   }
 * }} QueryData
 */

/**
 * React component for displaying details about a GitHub repo.
 * @param {object} props Props.
 * @param {string} props.repoId GitHub repo ID.
 */
export default function GithubRepo({ repoId }) {
  const cacheKey = `GithubRepo-${repoId}`;
  const cacheValue =
    /**
     * @type {import("graphql-react/fetchGraphQL.mjs").FetchGraphQLResult
     *   & { data?: QueryData } | undefined}
     */
    (useCacheEntry(cacheKey));

  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadGithubApi = useLoadGithubApi();
  const load = useCallback(
    () =>
      loadGithubApi(cacheKey, {
        query,
        variables: {
          repoId,
        },
      }),
    [cacheKey, loadGithubApi, repoId],
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : h(
    Fragment,
    null,
    !!cacheValue &&
      h(
        Fragment,
        null,
        cacheValue.data &&
          h(
            Fragment,
            null,
            cacheValue.data.repo &&
              h(
                Table,
                null,
                h(
                  "tbody",
                  null,
                  h(
                    "tr",
                    null,
                    h("th", { scope: "row" }, "Repo"),
                    h(
                      "td",
                      null,
                      h(LinkText, {
                        href: cacheValue.data.repo.url,
                      }, cacheValue.data.repo.nameWithOwner),
                    ),
                  ),
                  h(
                    "tr",
                    null,
                    h("th", { scope: "row" }, "Stars"),
                    h("td", null, cacheValue.data.repo.stargazers.totalCount),
                  ),
                ),
              ),
            h(
              Para,
              null,
              h("strong", null, cacheValue.data.rateLimit.remaining),
              " GitHub API rate limit points remaining for this 60 min window.",
            ),
          ),
        !!cacheValue.errors && h(GraphQLErrors, { errors: cacheValue.errors }),
      ),
    h(ButtonSubmit, {
      loading: !!loadingCacheValues,
      onClick: load,
      title: "Reload",
    }, "↻"),
  );
}
