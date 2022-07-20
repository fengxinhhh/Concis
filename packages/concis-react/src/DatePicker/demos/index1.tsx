import React from 'react';
import TimePicker from '../DatePicker';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function TimePickerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('DatePicker');

  const handleChange = (date: string) => {
    console.log(date);
  };
  return (
    <TimePicker
      disableCheck={(date: Date) => date.getDate() > 12}
      align="top"
      showClear={true}
      handleChange={handleChange}
    />
  );
}
