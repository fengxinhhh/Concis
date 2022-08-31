import React from 'react';
import { Rate } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';
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
