import React, { createRef } from 'react';
import Form from '..';
import Input from '../../Input';
import CheckBox from '../../CheckBox';
import Button from '../../Button';
import Select from '../../Select';

const option = [
  {
    label: 'Mucy',
    value: 'mucy',
  },
  {
    label: 'Mike',
    value: 'mike',
  },
  {
    label: 'aMck',
    value: 'amck',
  },
];
export default function index1() {
  const form = Form.useForm(); // 使用Form组件回传的hooks，调用组件内链方法
  const formRef = createRef(); // 调用端设一个ref，保证单页面多表单唯一性

  const submit = async () => {
    const submitParams = await form.onSubmit(formRef);
    console.log(submitParams);
  };

  return (
    <div>
      <Form layout="vertical" formField={formRef} style={{ width: '600px' }}>
        <Form.Item label="Username" field="username">
          <Input placeholder="Please enter your usename" width="200" />
        </Form.Item>
        <Form.Item label="Post" field="post">
          <Input placeholder="Please enter your post" width="200" />
        </Form.Item>
        <Form.Item label="Name" field="name">
          <Select option={option} width={200} placeholder="请选择" />
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary" handleClick={submit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
