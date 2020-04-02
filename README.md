# React Emotion Shadow

A [Shadow Container
](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) which ensure/encapsulate the style of  
inner components using emotion.

## Deprecation

The original [ReactShadow](https://github.com/Wildhoney/ReactShadow) has already supported emotion officially.

## Motivation

With css-in-js such as [emotion](https://emotion.sh/), component can scope its style so it won't hurt the others. But
the global style of the app may break the styles of 3rd party components accidentally.

It would be good to have a container which prevents the outside styles from affecting the emotion-styled components inside it.

## Install

```
yarn add react-emotion-shadow
```

## Usage

```typescript jsx
import React from 'react';
import { EmotionShadow } from 'react-emotion-shadow';

function Button() {
  return <button css={{ color: 'blue' }}>A Button</button>;
}

function DemoApp() {
  return (
    <div css={{ button: { height: 32 } }}>
      {/* the height of this button is affected */}
      <Button />
      <EmotionShadow>
        {/* the height of the button is not affected */}
        <Button />
      </EmotionShadow>
    </div>
  );
}
```

## Props

- `tag?: string = 'div'` the element tag of the root
- `rootProps?: object` the props passed into the root, see https://github.com/Wildhoney/ReactShadow
-  `cacheOptions?: object` the options passed into the cache, see https://emotion.sh/docs/@emotion/cache#options

## Caveats

- If a component is in a portal which is mounted outside the shadow root, it will lose the styles.
- There is risk for complex and complicated components, such as rich text editor. 

## Thanks for

- [react-shadow](https://github.com/Wildhoney/ReactShadow)

## License

MIT
