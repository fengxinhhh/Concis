import React from 'react';
import TimePicker from '..';

export default function TimePickerDemo3() {
  const handleChange = (start: string, end: string) => {
    console.log(start, end);
  };
  return <TimePicker type="primary" showRange handleChange={handleChange} />;
}
