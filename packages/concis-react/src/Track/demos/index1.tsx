import React from 'react';
import { Track } from 'concis';

export default function TrackDemo1() {
  const ref = React.useRef(null);

  const collect = () => {
    const res = ref.current.callbackTrackData();
    console.log(res);
  };

  return (
    <div>
      <Track ref={ref} />
      <span onClick={collect}>收集当前页面数据</span>
    </div>
  );
}
