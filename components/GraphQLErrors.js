import List from 'device-agnostic-ui/public/components/List.js';
import Para from 'device-agnostic-ui/public/components/Para.js';
import { ErrorMessage } from './ErrorMessage';

export function GraphQLErrors({ errors }) {
  return errors.map((error, index) => {
    let heading;
    let children;

    switch (error.extensions.code) {
      case 'FETCH_ERROR':
        heading = 'Fetch error';
        children = <Para>{error.extensions.fetchErrorMessage}</Para>;
        break;

      case 'RESPONSE_HTTP_STATUS':
        heading = 'HTTP error';
        children = (
          <Para>
            HTTP status {error.extensions.statusCode}:{' '}
            {error.extensions.statusText}.
          </Para>
        );
        break;

      case 'RESPONSE_JSON_PARSE_ERROR':
        heading = 'Response JSON parse error';
        children = <Para>{error.extensions.jsonParseErrorMessage}</Para>;
        break;

      case 'RESPONSE_MALFORMED':
        heading = 'Malformed response';
        children = <Para>{error.message}</Para>;
        break;

      default:
        heading = 'GraphQL error';
        children = (
          <>
            <Para>{error.message}</Para>
            {error.locations && (
              <List>
                {error.locations.map(({ line, column }) => (
                  <li key={`${line}-${column}`}>
                    Line {line}, column {column}.
                  </li>
                ))}
              </List>
            )}
          </>
        );
    }

    return (
      <ErrorMessage
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        heading={heading}
      >
        {children}
      </ErrorMessage>
    );
  });
}
