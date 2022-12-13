import React, { useState } from 'react';
import Drawer from '../../../src/Drawer';
import Button from '../../../src/Button';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(Drawer);

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
      <Drawer title="Title" visible={visible} onOk={onOk} onCancel={onCancel}>
        Content
      </Drawer>
    </>
  );
}
function DiffAlignDemoTest() {
  const [visible, setVisible] = useState(false);
  const [align, setAlign] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  function open() {
    setVisible(true);
  }

  function onOk() {
    setVisible(false);
  }

  function onCancel() {
    setVisible(false);
  }
  function changeAlign() {
    switch (align) {
      case 'left':
        setAlign('right');
        break;
      case 'right':
        setAlign('top');
        break;
      case 'top':
        setAlign('bottom');
        break;
      default:
        setAlign('left');
    }
  }

  return (
    <>
      <Button handleClick={open} type="primary">
        Open
      </Button>
      <Button handleClick={changeAlign} type="danger">
        Change
      </Button>
      <Drawer title="Title" visible={visible} align={align} onOk={onOk} onCancel={onCancel}>
        Content
      </Drawer>
    </>
  );
}
function DiffFooterDemo() {
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
      <Drawer title="Title" visible={visible} onOk={onOk} onCancel={onCancel} footer={<></>}>
        Content
      </Drawer>
    </>
  );
}

describe('Drawer test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.runAllTimers();
  });

  it('test base Drawer correctly', () => {
    const wrapper = mount(<DemoTest />);
    expect(wrapper.find('.concis-drawer').length).toBe(1);
    expect(wrapper.find(Drawer).props().visible).toBe(false);
    wrapper
      .find('.concis-button-primary')
      .filterWhere((n: any) => n.text() === 'Open')
      .simulate('click');
    expect(wrapper.find('.concis-drawer-dialog').length).toBe(1);
    expect(wrapper.find(Drawer).props().visible).toBe(true);
  });

  it('test diff align show correctly', () => {
    const wrapper = mount(<DiffAlignDemoTest />);
    function open() {
      wrapper
        .find('.concis-button-primary')
        .filterWhere((n: any) => n.text() === 'Open')
        .simulate('click');
    }
    function change() {
      wrapper
        .find('.concis-button-danger')
        .filterWhere((n: any) => n.text() === 'Change')
        .simulate('click');
    }
    open();
    expect(wrapper.find(Drawer).props().align).toBe('left');
    change();
    expect(wrapper.find(Drawer).props().align).toBe('right');
    change();
    expect(wrapper.find(Drawer).props().align).toBe('top');
    change();
    expect(wrapper.find(Drawer).props().align).toBe('bottom');
  });

  it('test no footer correctly', () => {
    const wrapper = mount(<DiffFooterDemo />);
    function open() {
      wrapper
        .find('.concis-button-primary')
        .filterWhere((n: any) => n.text() === 'Open')
        .simulate('click');
    }
    open();
    expect(
      wrapper.find('.concis-drawer .concis-drawer-content-footer').getDOMNode().innerHTML
    ).toBe('');
  });
});
