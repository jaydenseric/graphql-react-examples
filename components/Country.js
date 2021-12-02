import Loading from "device-agnostic-ui/Loading.mjs";
import Table from "device-agnostic-ui/Table.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useLoadGraphQL from "graphql-react/useLoadGraphQL.mjs";
import useLoadingEntry from "graphql-react/useLoadingEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { useCallback } from "react";
import { GraphQLErrors } from "./GraphQLErrors";

const fetchUri = "https://countries.trevorblades.com";
const query = /* GraphQL */ `
  query ($countryCode: ID!) {
    country(code: $countryCode) {
      name
      emoji
      capital
    }
  }
`;

export function Country({ countryCode }) {
  const cacheKey = `Country-${countryCode}`;
  const cacheValue = useCacheEntry(cacheKey);
  const loadingCacheValues = useLoadingEntry(cacheKey);
  const loadGraphQL = useLoadGraphQL();
  const load = useCallback(
    () =>
      loadGraphQL(cacheKey, fetchUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            countryCode,
          },
        }),
      }),
    [cacheKey, countryCode, loadGraphQL]
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : (
    <section>
      {!!cacheValue && (
        <>
          {cacheValue.data && (
            <Table>
              <tbody>
                <tr>
                  <th scope="row">Country</th>
                  <td>{cacheValue.data.country.name}</td>
                </tr>
                <tr>
                  <th scope="row">Emoji</th>
                  <td>{cacheValue.data.country.emoji}</td>
                </tr>
                <tr>
                  <th scope="row">Capital</th>
                  <td>{cacheValue.data.country.capital}</td>
                </tr>
              </tbody>
            </Table>
          )}
          {cacheValue.errors && <GraphQLErrors errors={cacheValue.errors} />}
        </>
      )}
      {!!loadingCacheValues && <Loading />}
    </section>
  );
}
