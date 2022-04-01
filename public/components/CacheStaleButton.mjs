// @ts-check

import Button, { css as cssButton } from "device-agnostic-ui/Button.mjs";
import cacheStale from "graphql-react/cacheStale.mjs";
import useCache from "graphql-react/useCache.mjs";
import { createElement as h, useCallback } from "react";

export const css = new Set([
  ...cssButton,
]);

/** React component for a cache stale button. */
export default function CacheStaleButton() {
  const cache = useCache();
  const onClick = useCallback(() => {
    cacheStale(cache);
  }, [cache]);

  return h(Button, { onClick }, "Stale cache");
}
