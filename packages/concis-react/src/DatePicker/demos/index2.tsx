import React from 'react';
import TimePicker from '..';

export default function TimePickerDemo2() {
  const handleChange = (date: string) => {
    console.log(date);
  };
  return <TimePicker type="input" handleChange={handleChange} />;
}
