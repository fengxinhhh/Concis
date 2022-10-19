import React from 'react';
import { Highlight } from 'concis';

export default function HighlightDemo1() {
  return (
    <div>
      <Highlight
        query={['spotlight']}
        style={{ fontSize: 20 }}
        styles={{ px: '5', py: '10', mx: '5', rounded: true, bg: '#fed7d7' }}
      >
        With the Highlight component, you can spotlight word.
      </Highlight>
    </div>
  );
}
