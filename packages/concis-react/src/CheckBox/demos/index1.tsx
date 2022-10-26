import React from 'react';
import { CheckBox } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function TimePickerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('CheckBox');

  const checkCallback = (result: boolean) => {
    console.log(result);
  };

  return (
    <CheckBox checked checkCallback={checkCallback} style={{ padding: '5px 0' }}>
      Apple
    </CheckBox>
  );
}
