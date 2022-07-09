import React from 'react';
import CheckBox from '../../src/CheckBox/index';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { act } from 'react-dom/test-utils';

const { mount } = Enzyme;

mountTest(CheckBox);

describe('CheckBox', () => {
  it('test default checkBox show & click correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <CheckBox checked={true} checkCallback={mockFn}>
        Apple
      </CheckBox>,
    );
    expect(component.find('.checkBox-actived')).toHaveLength(1);
    act(() => {
      component.simulate('click');
    });
    component.update();
    expect(component.find('.checkBox-noActived')).toHaveLength(1);
    expect(mockFn).toBeCalled();
  });

  it('test disabled checkBox correctly', () => {
    const component = mount(
      <CheckBox checked={true} disabled>
        Apple
      </CheckBox>,
    );
    expect(component.find('.disblaed-checkBox')).toHaveLength(1);
    act(() => {
      component.simulate('click');
    });
    expect(component.find('.disblaed-checkBox')).toHaveLength(1);
  });

  it('test checkBox group correctly', () => {
    const checkGroup = [
      {
        label: 'Apple',
        value: 1,
      },
      {
        label: 'Peer',
        value: 2,
        checked: true,
      },
      {
        label: 'Orange',
        value: 3,
        disabled: true,
      },
    ];
    const mockFn = jest.fn();
    const component = mount(<CheckBox group={checkGroup} checkGroupCallback={mockFn}></CheckBox>);
    expect(component.find('.checkGroup')).toHaveLength(1);
    expect(component.find('.checkGroup .groupBox')).toHaveLength(3);
    expect(component.find('.checkGroup .groupBox .checkBox-noActived')).toHaveLength(1);
    expect(component.find('.checkGroup .groupBox .checkBox-actived')).toHaveLength(1);
    expect(component.find('.checkGroup .groupBox .disblaed-checkBox')).toHaveLength(1);
  });
});
