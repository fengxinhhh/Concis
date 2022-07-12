import React from 'react';
import Rate from '..';
import usePageListener from '../../_util/hooks/usePageListener';
/**
 * transform: true
 */
export default function RateDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Rate');

  const chooseCallback = (val: number) => {
    console.log(val);
  };
  return <Rate chooseCallback={chooseCallback} />;
}
