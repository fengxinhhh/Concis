import React from 'react';
import TimePicker from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index4() {
  process.env.NODE_ENV === 'production' && usePageListener('TimePicker');
  const disableHour = (hour: string) => {
    return Number(hour) < 5;
  };
  const disableMin = (min: string) => {
    return Number(min) > 40;
  };
  const disableSecond = (second: string) => {
    return false;
  };
  return (
    <TimePicker
      showClear={true}
      disableHour={disableHour}
      disableMin={disableMin}
      disableSecond={disableSecond}
    ></TimePicker>
  );
}
