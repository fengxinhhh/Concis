import React from 'react';
import { TimePicker } from 'concis';

export default function index4() {
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
      showClear
      disableHour={disableHour}
      disableMin={disableMin}
      disableSecond={disableSecond}
    />
  );
}
