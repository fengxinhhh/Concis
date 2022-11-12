import React from 'react';
import { Track } from 'concis';

export default function TrackDemo1() {
  const ref = React.useRef();
  setTimeout(() => {
    console.log(ref);
  }, 1000);
  return (
    <div>
      <Track ref={ref} />
    </div>
  );
}
