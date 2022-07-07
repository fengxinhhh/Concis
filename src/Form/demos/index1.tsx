import React from 'react';
import Form from '..';
import Input from '../../Input';
import CheckBox from '../../CheckBox';
import Button from '../../Button';

export default function index1() {
  return (
    <div>
      <Form layout={'vertical'} style={{ width: '600px' }}>
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
