import React, { useRef } from 'react';
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
  const formRef = Form.useForm(); //创建一个Form ref hook，调用一系列表单方法
  const submit = () => {
    console.log(formRef.onSubmit());
  };

  return (
    <div>
      <Form layout={'vertical'} style={{ width: '600px' }}>
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
            handleClick={() => formRef.resetFields()}
            style={{ margin: '0 10px' }}
          >
            重置
          </Button>
          <Button type="text" handleClick={() => formRef.validateFields()}>
            校验
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
