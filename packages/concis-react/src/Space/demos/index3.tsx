import React, { useState } from 'react';
import Space from '..';
import Button from '../../Button';
import RadioGroup from '../../Radio/RadioGroup';
import Radio from '../../Radio';

export default function index1() {
  const [size, setSize] = useState('small');

  const onChange = (val) => {
    setSize(val.children);
    console.log(size);
  };

  return (
    <>
      <RadioGroup value={1} onChange={onChange}>
        <Radio>mini</Radio>
        <Radio>small</Radio>
        <Radio>medium</Radio>
        <Radio>large</Radio>
      </RadioGroup>
      <br />
      <Space size={size}>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary">Button3</Button>
      </Space>
    </>
  );
}
