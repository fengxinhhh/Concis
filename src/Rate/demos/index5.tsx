import React from 'react';
import Rate from '..';
/**
 * transform: true
 */
export default function RateDemo3() {
  const chooseCallback = (val: number) => {
    console.log(val);
  };
  return <Rate avaClear chooseCallback={chooseCallback} />;
}
