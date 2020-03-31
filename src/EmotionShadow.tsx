import createCache, {
  EmotionCache,
  Options as CacheOptions,
} from '@emotion/cache';
import { CacheProvider } from '@emotion/core';
import React, { ReactNode, useEffect, useState } from 'react';
// @ts-ignore
import root from 'react-shadow';
import { ensuredForwardRef } from 'react-use';

type Props = {
  children?: ReactNode;
  tag?: string;
  rootProps?: { [key: string]: any }; // see https://github.com/Wildhoney/ReactShadow
  cacheOptions?: CacheOptions;
};

export const EmotionShadow = ensuredForwardRef<HTMLElement, Props>(
  ({ tag = 'div', children, rootProps, cacheOptions }, ref) => {
    const [cache, setCache] = useState<EmotionCache | null>(null);

    useEffect(() => {
      const cache = createCache({
        // @ts-ignore
        container: ref.current.shadowRoot,
        ...cacheOptions,
      });
      setCache(cache);
    }, [ref, cacheOptions]);

    const Root = root[tag];

    return (
      <Root ref={ref} {...rootProps}>
        {cache && <CacheProvider value={cache}>{children}</CacheProvider>}
      </Root>
    );
  }
);
