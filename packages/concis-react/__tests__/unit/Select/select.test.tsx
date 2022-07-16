import React from 'react';
import Select from '../../../src/Select';
import Enzyme from '../setup';
import mountTest from '../mountTest';

const { mount } = Enzyme;

mountTest(Select);

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
const disabledOption = [
  {
    label: 'Lucy',
    value: 'lucy',
    disabled: true,
  },
  {
    label: 'Mike',
    value: 'mike',
  },
  {
    label: 'Jack',
    value: 'jack',
  },
];

describe('Select', () => {
  it('test base Select correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <Select option={option} width={200} handleSelectCallback={mockFn} placeholder={'请选择'} />,
    );
    expect(
      component
        .find('.selectOptions')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('width: 200px; height: 0px;'),
    );
    component.find('.selected').simulate('click');
    expect(
      component
        .find('.selectOptions')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('width: 200px; height: 300%;'),
    );
    component.find('.selectOptions .option').at(0).simulate('click');
    expect(component.find('.selectOptions .option')).toHaveLength(2);
    expect(mockFn).toBeCalled();
  });

  it('test disabled Select correctly', () => {
    const component = mount(<Select option={option} width={200} disabled placeholder={'请选择'} />);
    expect(
      component
        .find('.concis-select')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('cursor: not-allowed;'),
    );
    component.find('.concis-select').simulate('click');
    expect(
      !component.find('.concis-select').getDOMNode().getAttribute('style')?.includes('height'),
    );
  });

  it('test loading Select correctly', () => {
    const component = mount(<Select option={option} width={200} loading placeholder={'请选择'} />);
    expect(component.find('.selected span').hasClass('anticon anticon-loading anticon-spin'));
  });

  it('test Select with disabled options correctly', () => {
    const component = mount(<Select option={disabledOption} width={200} placeholder={'请选择'} />);
    expect(
      component
        .find('.selectOptions .option')
        .at(0)
        .getDOMNode()
        .getAttribute('style')
        ?.includes('cursor: not-allowed; background: rgb(238, 238, 238);'),
    );
  });

  it('test input Select correctly', () => {
    const inputCallback = jest.fn();
    const selectCallback = jest.fn();
    const component = mount(
      <Select
        option={option}
        width={200}
        handleSelectCallback={selectCallback}
        handleTextChange={inputCallback}
        showSearch
        placeholder={'请输入'}
        clearable
      />,
    );
    component.find('.selected input').simulate('focus');
    component.find('.selected input').simulate('change', {
      target: {
        value: 'Mi',
      },
    });
    expect(component.find('.selectOptions .option')).toHaveLength(1);
    component.find('.selected span').simulate('click');
    expect(component.find('.selectOptions .option')).toHaveLength(3);
    expect(component.find('.selected input').getDOMNode().getAttribute('value') === '');
    expect(inputCallback).toBeCalled();
    component.find('.selectOptions .option').at(0).simulate('click');
    expect(selectCallback).toBeCalled();
    expect(component.find('.selected input').getDOMNode().getAttribute('value') === 'Mucy');
  });
});
