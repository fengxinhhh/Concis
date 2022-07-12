import React from 'react';
import RadioGroup from '../../../packages/concis-react/src/Radio/RadioGroup';
import Radio from '../../../packages/concis-react/src/Radio';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { mount } = Enzyme;

mountTest(Radio);

describe('Radio', () => {
  it('test default RadioGroup & Radio Component correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <RadioGroup value={0} onChange={mockFn}>
        <Radio>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>,
    );
    expect(component.find('.radioGroup')).toHaveLength(1);
    expect(component.find('.radioGroup .radioBox')).toHaveLength(3);
    expect(
      component
        .find('.radioGroup .radioBox')
        .at(0)
        .find('input')
        .getDOMNode()
        .getAttribute('checked'),
    ).toBe('');
    component.find('.radioGroup .radioBox').at(1).simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('test disabled Radio Component correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <RadioGroup value={1} onChange={mockFn}>
        <Radio disabled>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>,
    );
    expect(
      component
        .find('.radioGroup .radioBox')
        .at(0)
        .getDOMNode()
        .getAttribute('style')
        ?.includes('cursor: not-allowed'),
    );
  });

  it('test open more Radio Component correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <RadioGroup value={1} onChange={mockFn} canAddOption>
        <Radio disabled>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>,
    );
    expect(component.find('.radioGroup .addOption')).toHaveLength(1);
    const openOptionDom = component.find('.radioGroup .addOption');
    const input = openOptionDom.find('input');
    openOptionDom.simulate('click');
    input.simulate('change', {
      target: 'new',
    });
    input.simulate('keyDown', {
      keyCode: 13,
    });
    expect(component.find('.radioGroup .radioBox')).toHaveLength(4);
    component.setProps({ canAddOption: false });
    expect(component.find('.radioGroup .addOption')).toHaveLength(0);
  });
});
