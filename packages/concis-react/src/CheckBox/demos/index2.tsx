import React from 'react';
import { CheckBox } from 'concis';

export default function TimePickerDemo1() {
  const checkCallback = (result: boolean) => {
    console.log(result);
  };

  return (
    <CheckBox checked disabled checkCallback={checkCallback}>
      Apple
    </CheckBox>
  );
}
