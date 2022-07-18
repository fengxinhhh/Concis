import React from 'react';
import DatePicker from '..';

export default function TimePickerDemo3() {
  const handleChange = (start: string, end: string) => {
    console.log(start, end);
  };
  return <DatePicker type="primary" showRange showClear handleChange={handleChange} />;
}
