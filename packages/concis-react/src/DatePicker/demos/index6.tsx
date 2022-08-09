import React from 'react';
import DatePicker from '../DatePicker';

export default function TimePickerDemo6() {
  const handleChange = (date: string) => {
    console.log(date);
  };

  return (
    <DatePicker
      disableCheck={(date: Date) => date.getDate() > 13}
      align="right"
      showClear
      handleChange={handleChange}
    />
  );
}
