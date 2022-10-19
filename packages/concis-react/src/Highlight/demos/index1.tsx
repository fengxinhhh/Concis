import React from 'react';
import { Highlight } from 'concis';

export default function HighlightDemo1() {
  return (
    <div>
      <Highlight query={['spotlight']} style={{ fontSize: 20 }}>
        With the Highlight component, you can spotlight word.
      </Highlight>
    </div>
  );
}
