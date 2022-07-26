import React, { createRef } from 'react';
import Form from '..';
import Input from '../../Input';
import CheckBox from '../../CheckBox';
import Button from '../../Button';
import Select from '../../Select';
import TimePicker from '../../DatePicker';
import Rate from '../../Rate';
import Tree from '../../Tree';
import Message from '../../Message';

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
const treeData = [
  {
    title: 'parent1',
    value: '0-0',
    children: [
      {
        title: 'parent 1-0',
        value: '0-0-1',
      },
      {
        title: 'parent 1-1',
        value: '0-0-2',
        children: [
          {
            title: 'leaf2',
            value: '0-0-0-1',
          },
        ],
      },
    ],
  },
  {
    title: 'parent2',
    value: '0-1',
    children: [
      {
        title: 'parent 2-0',
        value: '0-0-3',
      },
    ],
  },
];

export default function index1() {
  const form = Form.useForm(); //使用Form组件回传的hooks，调用组件内链方法
  const formRef = createRef(); //调用端设一个ref，保证单页面多表单唯一性

  const submit = async () => {
    const submitParams = await form.onSubmit(formRef);
    if (submitParams.submitResult) {
      Message.success('注册成功');
    } else {
      Message.error('注册失败');
    }
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
            { fn: (a: string) => a.includes('a'), message: '必须包含a' },
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
        <Form.Item
          label="CreateTime"
          field="CreateTime"
          rules={[{ required: true, message: '请输入名字' }]}
        >
          <TimePicker type="primary" showRange showClear />
        </Form.Item>
        <Form.Item label="Rate" field="Rate" rules={[{ required: true, message: '请选择分数' }]}>
          <Rate num={4} defaultShow={3} />
        </Form.Item>
        <Form.Item label="Group" field="Group" rules={[{ required: true, message: '请选择群组' }]}>
          <Tree treeData={treeData} avaChooseMore />
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
            handleClick={async () => await form.resetFields(formRef)}
            style={{ margin: '0 10px' }}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
