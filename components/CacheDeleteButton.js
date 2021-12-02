import Button from "device-agnostic-ui/Button.mjs";
import cacheDelete from "graphql-react/cacheDelete.mjs";
import useCache from "graphql-react/useCache.mjs";
import { useCallback } from "react";

export function CacheDeleteButton() {
  const cache = useCache();
  const onClick = useCallback(() => {
    cacheDelete(cache);
  }, [cache]);

  return <Button onClick={onClick}>Delete cache</Button>;
}
