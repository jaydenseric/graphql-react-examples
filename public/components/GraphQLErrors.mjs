// @ts-check

import ListUnordered, {
  css as cssListUnordered,
} from "device-agnostic-ui/ListUnordered.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement as h, Fragment } from "react";

import ErrorMessage, { css as cssErrorMessage } from "./ErrorMessage.mjs";

export const css = new Set([
  ...cssListUnordered,
  ...cssPara,
  ...cssErrorMessage,
]);

/**
 * @param {import("graphql-react/types.mjs").GraphQLResultError} error
 * @returns {error is import("graphql-react/fetchGraphQL.mjs").FetchGraphQLResultErrorLoading}
 */
function isFetchGraphQLResultErrorLoading(error) {
  return typeof error.extensions?.code === "string" && [
    "FETCH_ERROR",
    "RESPONSE_HTTP_STATUS",
    "RESPONSE_JSON_PARSE_ERROR",
    "RESPONSE_MALFORMED",
  ].includes(error.extensions.code);
}

/**
 * React component for displaying GraphQL errors.
 * @param {object} props Props.
 * @param {NonNullable<
 *   import("graphql-react/fetchGraphQL.mjs").FetchGraphQLResult["errors"]
 * >} props.errors GraphQL errors.
 */
export default function GraphQLErrors({ errors }) {
  return h(
    Fragment,
    null,
    errors.map((error, index) => {
      /** @type {string} */
      let heading;

      /** @type {import("react").ReactNode} */
      let children;

      if (isFetchGraphQLResultErrorLoading(error)) {
        switch (error.extensions.code) {
          case "FETCH_ERROR":
            heading = "Fetch error";
            children = h(
              Para,
              null,
              error.extensions.fetchErrorMessage,
            );
            break;

          case "RESPONSE_HTTP_STATUS":
            heading = "HTTP error";
            children = h(
              Para,
              null,
              "HTTP status ",
              error.extensions.statusCode,
              ":",
              " ",
              error.extensions.statusText,
              ".",
            );
            break;

          case "RESPONSE_JSON_PARSE_ERROR":
            heading = "Response JSON parse error";
            children = h(
              Para,
              null,
              error.extensions.jsonParseErrorMessage,
            );
            break;

          case "RESPONSE_MALFORMED":
            heading = "Malformed response";
            children = h(Para, null, error.message);
            break;
        }
      } else {
        heading = "GraphQL error";
        children = h(
          Fragment,
          null,
          h(Para, null, error.message),
          error.locations &&
            h(
              ListUnordered,
              null,
              error.locations.map(({ line, column }) =>
                h(
                  "li",
                  { key: `${line}-${column}` },
                  "Line ",
                  line,
                  ", column ",
                  column,
                  ".",
                )
              ),
            ),
        );
      }

      return h(ErrorMessage, { key: index, heading }, children);
    }),
  );
}
