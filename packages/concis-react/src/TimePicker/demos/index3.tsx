import React from 'react';
import TimePicker from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index3() {
  process.env.NODE_ENV === 'production' && usePageListener('TimePicker');

  return (
    <TimePicker
      showClear={true}
      handleConfirm={(...args: any) => {
        console.log(args);
      }}
    ></TimePicker>
  );
}
