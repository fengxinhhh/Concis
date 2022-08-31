import React from 'react';
import { MonthPicker } from 'concis';

export default function TimePickerDemo1() {
  const handleChange = (date: string) => {
    console.log(date);
  };

  return (
    <MonthPicker
      disableCheck={(date: Date) => date.getMonth() > 5}
      align="top"
      showClear
      handleChange={handleChange}
    />
  );
}
