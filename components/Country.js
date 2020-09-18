import { Loading, Table } from 'device-agnostic-ui';
import { useGraphQL } from 'graphql-react';
import React from 'react';
import { countriesFetchOptionsOverride } from '../config';
import { Errors } from './Errors';

const query = /* GraphQL */ `
  query($countryCode: ID!) {
    country(code: $countryCode) {
      name
      emoji
      capital
    }
  }
`;

export const Country = ({ countryCode }) => {
  const operation = React.useMemo(
    () => ({
      query,
      variables: {
        countryCode,
      },
    }),
    [countryCode]
  );

  const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
    operation,
    fetchOptionsOverride: countriesFetchOptionsOverride,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return (
    <>
      {data && (
        <Table>
          <tbody>
            <tr>
              <th scope="row">Country</th>
              <td>{data.country.name}</td>
            </tr>
            <tr>
              <th scope="row">Emoji</th>
              <td>{data.country.emoji}</td>
            </tr>
            <tr>
              <th scope="row">Capital</th>
              <td>{data.country.capital}</td>
            </tr>
          </tbody>
        </Table>
      )}
      <Errors {...errors} />
      {loading && <Loading />}
    </>
  );
};
