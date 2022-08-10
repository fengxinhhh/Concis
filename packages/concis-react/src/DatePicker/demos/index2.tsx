import React from 'react';
import { YearPicker } from '..';

export default function TimePickerDemo1() {
  const handleChange = (date: string) => {
    console.log(date);
  };

  return (
    <YearPicker
      disableCheck={(date: Date) => date.getFullYear() > 2022}
      align="top"
      showClear
      handleChange={handleChange}
    />
  );
}
