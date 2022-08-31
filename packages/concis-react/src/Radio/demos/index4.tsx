import React from 'react';
import { Radio, RadioGroup } from 'concis';

export default function RadioBoxDemo1() {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };
  return (
    <>
      <RadioGroup value={1} onChange={onChange} addOptionText="addOption..." canAddOption boxStyle>
        <Radio disabled>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>
    </>
  );
}
