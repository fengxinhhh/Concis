import React from 'react';
import TimePicker from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('TimePicker');
  const disableHour = (hour: string) => {
    return false;
  };
  const disableMin = (min: string) => {
    return false;
  };
  const disableSecond = (second: string) => {
    return false;
  };
  const change = () => {
    console.log(11);
  };
  return (
    <TimePicker
      showClear={true}
      disableHour={disableHour}
      disableMin={disableMin}
      disableSecond={disableSecond}
      clearCallback={change}
    ></TimePicker>
  );
}
