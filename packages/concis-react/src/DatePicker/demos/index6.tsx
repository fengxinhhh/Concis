import React, { useState } from 'react';
import { RangeDatePicker, RadioGroup, Radio } from 'concis';

export default function TimePickerDemo6() {
  const [align, setAlign] = useState('left');

  const handleChange = (date: string) => {
    console.log(date);
  };

  const onChange = (align) => {
    setAlign(align.children);
  };

  return (
    <>
      <RadioGroup value={0} onChange={onChange} style={{ marginBottom: 20 }}>
        <Radio>left</Radio>
        <Radio>right</Radio>
        <Radio>top</Radio>
        <Radio>bottom</Radio>
      </RadioGroup>
      <RangeDatePicker handleChange={handleChange} align={align} />
    </>
  );
}
