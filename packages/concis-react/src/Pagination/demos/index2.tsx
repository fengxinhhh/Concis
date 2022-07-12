import React from 'react';
import Pagination from '..';

export default function PatginationDemo2() {
  const changePageCallback = (pageNum: number) => {
    console.log(pageNum);
  };
  return <Pagination total={200} changePageCallback={changePageCallback} />;
}
