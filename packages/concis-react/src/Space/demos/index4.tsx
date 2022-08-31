import React, { useState } from 'react';
import { Space, Button, Radio, RadioGroup } from 'concis';

export default function index1() {
  const [align, setAlign] = useState('small');

  const onChange = (val) => {
    setAlign(val.children);
    console.log(align);
  };

  return (
    <>
      <RadioGroup value={1} onChange={onChange}>
        <Radio>start</Radio>
        <Radio>center</Radio>
        <Radio>end</Radio>
        <Radio>baseline</Radio>
      </RadioGroup>
      <br />
      <Space align={align}>
        <Button type="primary">Button1</Button>
        <Button type="primary">Button2</Button>
        <Button type="primary" height={90}>
          Button3
        </Button>
      </Space>
    </>
  );
}
