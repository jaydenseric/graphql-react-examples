import Button from 'device-agnostic-ui/public/components/Button.js';
import cacheDelete from 'graphql-react/public/cacheDelete.js';
import useCache from 'graphql-react/public/useCache.js';
import { useCallback } from 'react';

export function CacheDeleteButton() {
  const cache = useCache();
  const onClick = useCallback(() => {
    cacheDelete(cache);
  }, [cache]);

  return <Button onClick={onClick}>Delete cache</Button>;
}
