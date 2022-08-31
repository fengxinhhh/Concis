import React, { createRef } from 'react';
import { Form, Input, Button, Message } from 'concis';

export default function index1() {
  const form = Form.useForm(); // 使用Form组件回传的hooks，调用组件内链方法
  const formRef = createRef(); // 调用端设一个ref，保证单页面多表单唯一性

  const submit = async () => {
    const submitParams = await form.onSubmit(formRef);
    if (submitParams.submitResult) {
      Message.success('注册成功');
    } else {
      Message.error('注册失败');
    }
  };
  const getFormState = async () => {
    const context = await form.useFormContext(formRef);
    console.log(context);
  };

  return (
    <div>
      <Button handleClick={getFormState}>获取表单当前状态</Button>
      <Form layout="vertical" formField={formRef} style={{ width: '600px' }}>
        <Form.Item
          field="username"
          rules={[
            { required: true, message: '请输入用户名' },
            { maxLength: 10, message: '最大长度为10位' },
            { minLength: 3, message: '最小长度为3位' },
            { fn: (a: string) => a.includes('a'), message: '必须包含a' },
          ]}
        >
          <Input placeholder="Please enter your usename" width="240" />
        </Form.Item>
        <Form.Item field="phone" rules={[{ required: true, message: '请输入手机号' }]}>
          <Input placeholder="Please enter your phone number" width="240" />
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary" handleClick={submit}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
