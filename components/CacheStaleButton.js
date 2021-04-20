import Button from 'device-agnostic-ui/public/components/Button.js';
import cacheStale from 'graphql-react/public/cacheStale.js';
import useCache from 'graphql-react/public/useCache.js';
import { useCallback } from 'react';

export function CacheStaleButton() {
  const cache = useCache();
  const onClick = useCallback(() => {
    cacheStale(cache);
  }, [cache]);

  return <Button onClick={onClick}>Stale cache</Button>;
}
