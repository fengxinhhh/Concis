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
  const form = Form.useForm(); //使用Form组件回传的hooks，调用组件内链方法
  const formRef = createRef(); //调用端设一个ref，保证单页面多表单唯一性

  const submit = () => {
    const submitParams = form.onSubmit(formRef);
    console.log(submitParams);
  };

  return (
    <div>
      <Form layout={'horizontal'} formField={formRef} style={{ width: '600px' }}>
        <Form.Item
          label="Username"
          field="username"
          rules={[
            { required: true, message: '请输入用户名' },
            { maxLength: 10, message: '最大长度为10位' },
            { minLength: 3, message: '最小长度为3位' },
          ]}
        >
          <Input placeholder="Please enter your usename" width="200"></Input>
        </Form.Item>
        <Form.Item label="Post" field="post">
          <Input placeholder="Please enter your post" width="200"></Input>
        </Form.Item>
        <Form.Item label="Name" field="name" rules={[{ required: true, message: '请输入名字' }]}>
          <Select option={option} width={200} placeholder={'请选择'} />
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked={true}>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary" handleClick={submit}>
            Submit
          </Button>
          <Button
            type="text"
            handleClick={() => form.resetFields(formRef)}
            style={{ margin: '0 10px' }}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
