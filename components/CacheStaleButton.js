import Button from 'device-agnostic-ui/Button.mjs';
import cacheStale from 'graphql-react/cacheStale.mjs';
import useCache from 'graphql-react/useCache.mjs';
import { useCallback } from 'react';

export function CacheStaleButton() {
  const cache = useCache();
  const onClick = useCallback(() => {
    cacheStale(cache);
  }, [cache]);

  return <Button onClick={onClick}>Stale cache</Button>;
}
