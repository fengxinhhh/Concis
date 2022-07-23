import React from 'react';
import { MonthPicker } from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function TimePickerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('MonthPicker');

  const handleChange = (date: string) => {
    console.log(date);
  };

  return (
    <MonthPicker
      disableCheck={(date: Date) => date.getMonth() > 5}
      align="top"
      showClear={true}
      handleChange={handleChange}
    />
  );
}
