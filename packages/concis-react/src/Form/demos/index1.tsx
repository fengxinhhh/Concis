import React from 'react';
import { Form, Input, CheckBox, Button } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Form');

  return (
    <div>
      <Form layout="vertical" style={{ width: '600px' }}>
        <Form.Item label="Username">
          <Input placeholder="Please enter your usename" width="200" />
        </Form.Item>
        <Form.Item label="Post">
          <Input placeholder="Please enter your post" width="200" />
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
