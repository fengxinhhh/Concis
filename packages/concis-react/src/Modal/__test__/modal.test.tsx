import React, { useState } from 'react';
import Modal from '../../../src/Modal';
import Button from '../../../src/Button';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(Modal);

function DemoTest() {
  const [visible, setVisible] = useState(false);

  function open() {
    setVisible(true);
  }

  function onOk() {
    setVisible(false);
  }

  function onCancel() {
    setVisible(false);
  }

  return (
    <>
      <Button handleClick={open} type="primary">
        Open
      </Button>
      <Modal title="Title" visible={visible} onOk={onOk} onCancel={onCancel}>
        Content
      </Modal>
    </>
  );
}
function FooterDemoTest() {
  const [visible, setVisible] = useState(false);

  function open() {
    setVisible(true);
  }

  function onOk() {
    setVisible(false);
  }

  function onCancel() {
    setVisible(false);
  }

  return (
    <>
      <Button handleClick={open} type="primary">
        Open
      </Button>
      <Modal
        title="Title"
        visible={visible}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
        onOk={onOk}
        onCancel={onCancel}
      >
        Content
      </Modal>
    </>
  );
}
function NoFooterDemoTest() {
  const [visible, setVisible] = useState(false);

  function open() {
    setVisible(true);
  }

  function onOk() {
    setVisible(false);
  }

  function onCancel() {
    setVisible(false);
  }

  return (
    <>
      <Button handleClick={open} type="primary">
        Open
      </Button>
      <Modal title="Title" visible={visible} footer={<></>} onOk={onOk} onCancel={onCancel}>
        Content
      </Modal>
    </>
  );
}
describe('Modal', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.runAllTimers();
  });

  it('test base Modal correctly', async () => {
    const wrapper = mount(<DemoTest />);
    expect(wrapper.find('.concis-modal').length).toBe(1);
    expect(wrapper.find(Modal).props().visible).toBe(false);
    expect(wrapper.find('.concis-modal-dialog')).toHaveLength(0);
    wrapper
      .find('.concis-button-primary')
      .filterWhere((n: any) => n.text() === 'Open')
      .simulate('click');
    expect(wrapper.find('.concis-modal-dialog')).toHaveLength(1);
    expect(wrapper.find(Modal).props().visible).toBe(true);
    wrapper.find('.concis-modal-content .concis-button-primary').simulate('click');
    expect(wrapper.find(Modal).props().visible).toBe(false);
  });

  it('test modal set footer correctly', () => {
    const wrapper = mount(<FooterDemoTest />);
    wrapper
      .find('.concis-button-primary')
      .filterWhere((n: any) => n.text() === 'Open')
      .simulate('click');
    expect(
      wrapper
        .find('.concis-modal .concis-modal-content-footer button')
        .at(0)
        ?.getDOMNode()
        ?.getAttribute('class')
        ?.includes('disabled')
    ).toBe(true);
    expect(
      wrapper
        .find('.concis-modal .concis-modal-content-footer button')
        .at(1)
        ?.getDOMNode()
        ?.getAttribute('class')
        ?.includes('disabled')
    ).toBe(true);
  });

  it('test no footer modal correctly', () => {
    const wrapper = mount(<NoFooterDemoTest />);
    wrapper
      .find('.concis-button-primary')
      .filterWhere((n: any) => n.text() === 'Open')
      .simulate('click');
    expect(
      wrapper.find('.concis-modal .concis-modal-content-footer').getDOMNode().childNodes.length
    ).toBe(0);
  });

  it('test diff button text modal correctly', () => {
    const wrapper = mount(
      <Modal title="Modal Title" visible okText="Ok" cancelText="Cancel">
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      </Modal>
    );
    expect(wrapper.find('.concis-modal .concis-modal-content-footer button').at(0)?.text()).toBe(
      'Cancel'
    );
    expect(wrapper.find('.concis-modal .concis-modal-content-footer button').at(1)?.text()).toBe(
      'Ok'
    );
  });
});
