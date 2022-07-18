import React from 'react';
import DatePicker from '..';

export default function TimePickerDemo2() {
  const handleChange = (date: string) => {
    console.log(date);
  };
  return <DatePicker type="input" handleChange={handleChange} />;
}
