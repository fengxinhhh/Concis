import React from 'react';
import Radio from '..';
import RadioGroup from '../RadioGroup';

export default function RadioBoxDemo1() {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };
  return (
    <>
      <RadioGroup value={1} onChange={onChange} canAddOption boxStyle>
        <Radio disabled>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>
    </>
  );
}
