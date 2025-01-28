// @ts-check

import Fieldset, { css as cssFieldset } from "device-agnostic-ui/Fieldset.mjs";
import Textbox, { css as cssTextbox } from "device-agnostic-ui/Textbox.mjs";
import { createElement as h, useCallback, useState } from "react";

import SearchGithubReposResult from "./SearchGithubReposResult.mjs";

export const css = new Set([
  ...cssFieldset,
  ...cssTextbox,
]);

/** React component for searching GitHub repos. */
export default function SearchGithubRepos() {
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * @satisfies {NonNullable<
   *   import("react").ComponentPropsWithoutRef<typeof Textbox>["onChange"]
   * >}
   */
  const onSearchChange = useCallback(({ target: { value } }) => {
    setSearchQuery(value);
  }, []);

  return h(
    "section",
    null,
    h(
      Fieldset,
      { legend: "Search GitHub repos" },
      h(Textbox, {
        type: "search",
        value: searchQuery,
        onChange: onSearchChange,
        placeholder: "Search GitHub repos",
      }),
    ),
    !!searchQuery && h(SearchGithubReposResult, { searchQuery }),
  );
}
