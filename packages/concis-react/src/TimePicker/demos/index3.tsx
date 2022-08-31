import React from 'react';
import { TimePicker } from 'concis';

export default function index3() {
  return (
    <TimePicker
      showClear
      handleConfirm={(...args: any) => {
        console.log(args);
      }}
    />
  );
}
