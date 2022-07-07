import React, { useState } from 'react';
import Form from '..';
import Input from '../../Input';
import CheckBox from '../../CheckBox';
import Button from '../../Button';
import Radio from '../../Radio';
import RadioGroup from '../../Radio/RadioGroup';

export default function index1() {
  const [align, setAlign] = useState('horizontal');

  const onChange = (val: any) => {
    setAlign(val.children);
  };

  return (
    <div>
      <RadioGroup value={0} onChange={onChange}>
        <Radio>horizontal</Radio>
        <Radio>vertical</Radio>
      </RadioGroup>

      <Form layout={align} style={{ width: '600px' }}>
        <Form.Item label="Username">
          <Input placeholder="Please enter your usename" width="200"></Input>
        </Form.Item>
        <Form.Item label="Post">
          <Input placeholder="Please enter your post" width="200"></Input>
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked={true}>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
