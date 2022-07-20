import React, { useState } from 'react';
import Steps from '..';
import Step from '../Step';
/**
 * transform: true
 */
export default function MenuDemos1() {
  const [current, setCurrent] = useState(1);
  const onChange = (value: number) => {
    console.log('onChange:', current);
    setCurrent(value);
  };
  return (
    <Steps current={current} onChange={onChange}>
      <Step title="Step 1" />
      <Step title="Step 2" />
      <Step title="Step 3" />
    </Steps>
  );
}
