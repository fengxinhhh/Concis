import React from 'react';
import CheckBox from '..';

export default function TimePickerDemo1() {
  const checkCallback = (result: boolean) => {
    console.log(result);
  };

  return (
    <CheckBox checked={true} checkCallback={checkCallback}>
      Apple
    </CheckBox>
  );
}
