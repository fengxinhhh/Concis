import React from 'react';
import { Radio, RadioGroup } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function RadioBoxDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Radio');

  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };
  return (
    <>
      <RadioGroup value={0} onChange={onChange}>
        <Radio>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>
    </>
  );
}
