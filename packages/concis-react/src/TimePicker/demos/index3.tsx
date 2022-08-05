import React from 'react';
import TimePicker from '..';

export default function index3() {

  return (
    <TimePicker
      showClear={true}
      handleConfirm={(...args: any) => {
        console.log(args);
      }}
    ></TimePicker>
  );
}
