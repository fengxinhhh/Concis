import React, { useState } from 'react';
import Rate from '..';
/**
 * transform: true
 */
export default function RateDemo6() {
  const [result, setResult] = useState(3);

  const chooseCallback = (val: number) => {
    setTimeout(() => {
      setResult(val);
    }, 0);
  };
  return (
    <div style={{ display: 'flex' }}>
      <Rate
        starColor="red"
        num={5}
        defaultShow={3}
        avaClear
        avaHalf
        chooseCallback={chooseCallback}
      />
      <div className="result">{result}分</div>
    </div>
  );
}
