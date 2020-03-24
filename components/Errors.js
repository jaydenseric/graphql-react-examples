import { List, Para } from 'device-agnostic-ui'
import { ErrorMessage } from './ErrorMessage'

export const Errors = ({
  fetchError,
  httpError,
  parseError,
  graphQLErrors,
}) => (
  <>
    {fetchError && (
      <ErrorMessage heading="Fetch error">
        <Para>{fetchError}</Para>
      </ErrorMessage>
    )}
    {httpError && (
      <ErrorMessage heading={`HTTP error: ${httpError.status}`}>
        {httpError.statusText && <Para>{httpError.statusText}</Para>}
      </ErrorMessage>
    )}
    {parseError && (
      <ErrorMessage heading="Parse error">
        <Para>{parseError}</Para>
      </ErrorMessage>
    )}
    {graphQLErrors && (
      <ErrorMessage heading="GraphQL errors">
        <List>
          {graphQLErrors.map(({ message }, index) => (
            <li key={index}>{message}</li>
          ))}
        </List>
      </ErrorMessage>
    )}
  </>
)
