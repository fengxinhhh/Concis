import React from 'react';
import TimePicker from '..';

export default function TimePickerDemo1() {
  const handleChange = (date: string) => {
    console.log(date);
  };
  return <TimePicker type="primary" handleChange={handleChange} />;
}
