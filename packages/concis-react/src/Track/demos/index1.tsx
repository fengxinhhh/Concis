import React from 'react';
import { Track, Button } from 'concis';

export default function TrackDemo1() {
  const ref = React.useRef(null);

  const collect = () => {
    const res = ref.current.callbackTrackData();
    console.log(res);
  };

  return (
    <div>
      <Track ref={ref} />
      <Button handleClick={collect}>collect page info</Button>
    </div>
  );
}
