import React from 'react';
import DatePicker from '../DatePicker';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function TimePickerDemo6() {
  process.env.NODE_ENV === 'production' && usePageListener('DatePicker');

  const handleChange = (date: string) => {
    console.log(date);
  };

  return (
    <DatePicker
      disableCheck={(date: Date) => date.getDate() > 13}
      align="right"
      showClear={true}
      handleChange={handleChange}
    />
  );
}
