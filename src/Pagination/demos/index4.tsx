import React from 'react';
import Pagination from '..';

export default function PatginationDemo4() {
  const options = [10, 20, 30, 50];
  const changePageCallback = (pageNum: number) => {
    console.log(pageNum);
  };
  return (
    <Pagination
      total={200}
      showSizeChanger
      pageSizeOptions={options}
      showJumpInput
      changePageCallback={changePageCallback}
    />
  );
}
