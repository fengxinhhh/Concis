import React from 'react';
import { RangeDatePicker } from 'concis';

export default function TimePickerDemo3() {
  const handleChange = (start: string, end: string) => {
    console.log(start, end);
  };
  return <RangeDatePicker showClear handleChange={handleChange} />;
}
