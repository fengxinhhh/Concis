import React from 'react';
import { YearPicker } from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function TimePickerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('YearPicker');

  const handleChange = (date: string) => {
    console.log(date);
  };

  return (
    <YearPicker
      disableCheck={(date: Date) => date.getFullYear() > 2022}
      align="top"
      showClear={true}
      handleChange={handleChange}
    />
  );
}
