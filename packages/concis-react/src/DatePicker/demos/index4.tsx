import React from 'react';
import { RangeDatePicker } from 'concis';

export default function TimePickerDemo3() {
  const handleChange = (start: string, end: string) => {
    console.log(start, end);
  };
  const r = React.useRef();
  setTimeout(() => {
    console.log(r, 111);
  }, 1000);

  return <RangeDatePicker handleChange={handleChange} ref={r} />;
}
