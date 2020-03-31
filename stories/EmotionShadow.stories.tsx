/** @jsx jsx */
import { jsx } from '@emotion/core';
import { EmotionShadow } from '../src';

export default {
  title: 'EmotionShadow',
  component: EmotionShadow,
};

const Button = ({ children }) => {
  return (
    <button
      css={{
        color: 'blue',
      }}
    >
      {children}
    </button>
  );
};

export const Default = () => {
  return (
    <div css={{ button: { height: 32 } }}>
      <Button>Outside Button</Button>
      <EmotionShadow>
        <Button>Inside Button</Button>
      </EmotionShadow>
      <p>
        The button text is blue. The context set the button height, but the
        button inside Emotion shadow is not affected.
      </p>
    </div>
  );
};
