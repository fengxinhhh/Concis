import React, { useState, createRef } from 'react';
import Drawer from '..';
import Button from '../../Button';
import Form from '../../Form';
import Input from '../../Input';
import CheckBox from '../../CheckBox';
import Message from '../../Message';
import Rate from '../../Rate';
import Space from '../../Space';

export default function index1() {
  const [visible, setVisible] = useState(false);
  const form = Form.useForm();
  const formRef = createRef();

  const submit = async () => {
    const submitParams = await form.onSubmit(formRef);
    if (submitParams.submitResult) {
      Message.success('注册成功');
      setVisible(false);
    } else {
      Message.error('注册失败');
    }
  };

  return (
    <div>
      <Button
        handleClick={() => {
          setVisible(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        title="Drawer Title"
        visible={visible}
        width="400px"
        onCancel={() => setVisible(false)}
        footer={
          <Space>
            <Button type="text" handleClick={() => setVisible(false)}>
              取消
            </Button>
            <Button type="text" handleClick={async () => await form.resetFields(formRef)}>
              重置
            </Button>
            <Button type="primary" handleClick={submit}>
              提交
            </Button>
          </Space>
        }
      >
        <Form layout="horizontal" formField={formRef} style={{ width: '600px' }}>
          <Form.Item
            label="Username"
            field="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { maxLength: 10, message: '最大长度为10位' },
              { minLength: 3, message: '最小长度为3位' },
            ]}
          >
            <Input placeholder="请输入用户名" width="200" />
          </Form.Item>
          <Form.Item
            label="Password"
            field="password"
            rules={[
              { required: true, message: '请输入用户名' },
              { maxLength: 10, message: '最大长度为10位' },
              { minLength: 3, message: '最小长度为3位' },
              { fn: (a: string) => a.includes('concis'), message: '必须包含concis' },
            ]}
          >
            <Input placeholder="请输入密码" width="200" />
          </Form.Item>
          <Form.Item label="Star">
            <Rate />
          </Form.Item>
          <Form.Item wrapperTol={10}>
            <CheckBox checked>I have read the manual</CheckBox>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
