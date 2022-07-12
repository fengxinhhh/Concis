import React from 'react';
import Rate from '..';
/**
 * transform: true
 */
export default function RateDemo2() {
  const chooseCallback = (val: number) => {
    console.log(val);
  };
  return <Rate starColor="red" chooseCallback={chooseCallback} />;
}
