import React from 'react';
import { Rate } from 'concis';
/**
 * transform: true
 */
export default function RateDemo3() {
  const chooseCallback = (val: number) => {
    console.log(val);
  };
  return <Rate readonly chooseCallback={chooseCallback} />;
}
