import React from 'react';
import { Pagination } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function PatginationDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Pagination');

  const changePageCallback = (pageNum: number) => {
    console.log(pageNum);
  };
  return <Pagination total={50} changePageCallback={changePageCallback} />;
}
