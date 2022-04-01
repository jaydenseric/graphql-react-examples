// @ts-check

import Button, { css as cssButton } from "device-agnostic-ui/Button.mjs";
import cacheDelete from "graphql-react/cacheDelete.mjs";
import useCache from "graphql-react/useCache.mjs";
import { createElement as h, useCallback } from "react";

export const css = new Set([
  ...cssButton,
]);

/** React component for a cache delete button. */
export default function CacheDeleteButton() {
  const cache = useCache();
  const onClick = useCallback(() => {
    cacheDelete(cache);
  }, [cache]);

  return h(Button, { onClick }, "Delete cache");
}
