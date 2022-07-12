import React from 'react';
import CheckBox from '..';

export default function TimePickerDemo1() {
  const checkGroup = [
    {
      label: 'Apple',
      value: 1,
    },
    {
      label: 'Peer',
      value: 2,
      checked: true,
    },
    {
      label: 'Orange',
      value: 3,
      disabled: true,
    },
  ];
  const checkGroupCallback = (result: Array<object>) => {
    console.log(result);
  };
  return (
    <>
      <CheckBox group={checkGroup} checkGroupCallback={checkGroupCallback}></CheckBox>
    </>
  );
}
