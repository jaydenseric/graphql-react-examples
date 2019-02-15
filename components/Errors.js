import ErrorMessage from './ErrorMessage'

const Errors = ({ fetchError, httpError, parseError, graphQLErrors }) => (
  <>
    {fetchError && (
      <ErrorMessage heading="Fetch error">
        <p>{fetchError}</p>
      </ErrorMessage>
    )}
    {httpError && (
      <ErrorMessage heading={`HTTP error: ${httpError.status}`}>
        <p>{httpError.statusText}</p>
      </ErrorMessage>
    )}
    {parseError && (
      <ErrorMessage heading="Parse error">
        <p>{parseError}</p>
      </ErrorMessage>
    )}
    {graphQLErrors && (
      <ErrorMessage heading="GraphQL errors">
        <ul>
          {graphQLErrors.map(({ message }, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </ErrorMessage>
    )}
  </>
)

export default Errors
