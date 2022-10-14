import React, { createRef } from 'react';
import Form from '../../../src/Form/index';
import Input from '../../../src/Input';
import CheckBox from '../../../src/CheckBox';
import Button from '../../../src/Button';
import Select from '../../../src/Select';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

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

const { mount } = Enzyme;

mountTest(Form);

describe('Form', () => {
  it('test base form show correctly', () => {
    const component = mount(
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
    );
    const formDom = component.find('.concis-form');
    expect(component.find('.concis-form')).toHaveLength(1);
    expect(formDom.getDOMNode().getAttribute('style')).toEqual('width: 600px;');
    expect(component.find('.concis-form .concis-form-item')).toHaveLength(4);
    expect(
      component
        .find('.concis-form .concis-form-item')
        .at(2)
        .getDOMNode()
        .getAttribute('style')
        ?.includes('margin-bottom: 20px; margin-top: 40px;')
    ).toBe(true);
    expect(
      component
        .find('.concis-form .concis-form-item')
        .at(3)
        .getDOMNode()
        .getAttribute('style')
        ?.includes('margin-bottom: 20px; margin-top: 25px;')
    ).toBe(true);
  });
  it('test layout form show correctly', () => {
    const component = mount(
      <Form layout="horizontal" style={{ width: '600px' }}>
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
    );
    expect(
      component
        .find('.concis-form .concis-form-item')
        .at(0)
        .getDOMNode()
        .getAttribute('style')
        ?.includes('flex-direction: column; align-items: flex-start;')
    ).toBe(false);
  });
  it('test control form use correctly', () => {
    const mockSubmitFn = jest.fn();
    const form = Form.useForm();
    const formRef = createRef();

    const component = mount(
      <Form layout="vertical" formField={formRef} style={{ width: '600px' }}>
        <Form.Item
          label="Username"
          field="username"
          rules={[
            { required: true, message: '请输入用户名' },
            { maxLength: 10, message: '最大长度为10位' },
            { minLength: 3, message: '最小长度为3位' },
          ]}
        >
          <Input placeholder="Please enter your usename" width="200" />
        </Form.Item>
        <Form.Item label="Post" field="post">
          <Input placeholder="Please enter your post" width="200" />
        </Form.Item>
        <Form.Item label="Name" field="name" rules={[{ required: true, message: '请输入名字' }]}>
          <Select option={option} width={200} placeholder="请选择" />
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary" handleClick={mockSubmitFn}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
    component.find('.concis-form .concis-form-item').at(4).find('button').simulate('click');
    expect(mockSubmitFn).toBeCalled();
    const { submitResult } = form.onSubmit(formRef);
    expect(submitResult).toBeUndefined();
  });
  it('test form reset correctly', () => {
    const form = Form.useForm();
    const formRef = createRef();
    const mockResetFn = jest.fn();

    const component = mount(
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
          <Input placeholder="Please enter your usename" width="200" />
        </Form.Item>
        <Form.Item label="Post" field="post">
          <Input placeholder="Please enter your post" width="200" />
        </Form.Item>
        <Form.Item label="Name" field="name" rules={[{ required: true, message: '请输入名字' }]}>
          <Select option={option} width={200} placeholder="请选择" />
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="text" handleClick={mockResetFn} style={{ margin: '0 10px' }}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
    component
      .find('.concis-form .concis-form-item')
      .at(0)
      .find('input')
      .simulate('change', {
        target: {
          value: '123',
        },
      });
    component.find('.concis-form .concis-form-item').at(4).find('button').simulate('click');
    expect(mockResetFn).toBeCalled();
    form.resetFields(formRef);
    expect(
      component
        .find('.concis-form .concis-form-item')
        .at(0)
        .find('input')
        .getDOMNode()
        .getAttribute('value')
    );
  });

  it('test global disabled form show correctly', () => {
    const component = mount(
      <Form layout="vertical" disabled style={{ width: '600px' }}>
        <Form.Item
          label="Username"
          field="username"
          rules={[
            { required: true, message: '请输入用户名' },
            { maxLength: 10, message: '最大长度为10位' },
            { minLength: 3, message: '最小长度为3位' },
          ]}
        >
          <Input placeholder="Please enter your usename" width="200" />
        </Form.Item>
        <Form.Item label="Post" field="post">
          <Input placeholder="Please enter your post" width="200" />
        </Form.Item>
        <Form.Item label="Name" field="name" rules={[{ required: true, message: '请输入名字' }]}>
          <Select option={option} width={200} placeholder="请选择" />
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    );
    expect(component.find('.concis-form .disabled')).toHaveLength(1);
  });

  it('test Form.Item disabled form show correctly', () => {
    const component = mount(
      <Form layout="vertical" style={{ width: '600px' }}>
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
          <Input placeholder="Please enter your usename" width="200" />
        </Form.Item>
        <Form.Item label="Post" field="post" disabled>
          <Input placeholder="Please enter your post" width="200" />
        </Form.Item>
        <Form.Item label="Name" field="name" rules={[{ required: true, message: '请输入名字' }]}>
          <Select option={option} width={200} placeholder="请选择" />
        </Form.Item>
        <Form.Item wrapperTol={20}>
          <CheckBox checked>I have read the manual</CheckBox>
        </Form.Item>
        <Form.Item wrapperTol={5}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    );
    expect(
      component.find('.concis-form .concis-form-item').at(1).find('.concis-form-item-disabled')
    ).toHaveLength(1);
  });

  it('test useFormContext api correctly', () => {
    const formRef = createRef();
    const mockFn = jest.fn();

    const component = mount(
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
          <Button type="primary" handleClick={mockFn}>
            Register
          </Button>
        </Form.Item>
      </Form>
    );
    component
      .find('.concis-form .concis-form-item')
      .at(0)
      .find('input')
      .simulate('change', {
        target: {
          value: '123',
        },
      });
    component
      .find('.concis-form .concis-form-item')
      .at(1)
      .find('input')
      .simulate('change', {
        target: {
          value: '123',
        },
      });
    component.find('.concis-form .concis-form-item').at(2).find('button').simulate('click');
    expect(mockFn).toBeCalled();
  });
});
