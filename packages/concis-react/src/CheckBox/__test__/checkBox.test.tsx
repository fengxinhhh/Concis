import React from 'react';
import { act } from 'react-dom/test-utils';
import CheckBox from '../../../src/CheckBox/index';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(CheckBox);

describe('CheckBox', () => {
  it('test default checkBox show & click correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <CheckBox checked checkCallback={mockFn}>
        Apple
      </CheckBox>
    );
    expect(component.find('.concis-checkbox-actived')).toHaveLength(1);
    act(() => {
      component.simulate('click');
    });
    component.update();
    expect(component.find('.concis-checkbox-noActived')).toHaveLength(1);
    expect(mockFn).toBeCalled();
  });

  it('test disabled checkBox correctly', () => {
    const component = mount(
      <CheckBox checked disabled>
        Apple
      </CheckBox>
    );
    expect(component.find('.concis-checkbox-disabled')).toHaveLength(1);
    act(() => {
      component.simulate('click');
    });
    expect(component.find('.concis-checkbox-disabled')).toHaveLength(1);
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
    const component = mount(<CheckBox group={checkGroup} checkGroupCallback={mockFn} />);
    expect(component.find('.concis-checkGroup')).toHaveLength(1);
    expect(component.find('.concis-checkGroup .groupBox')).toHaveLength(3);
    expect(component.find('.concis-checkGroup .groupBox .concis-checkbox-noActived')).toHaveLength(
      1
    );
    expect(component.find('.concis-checkGroup .groupBox .concis-checkbox-actived')).toHaveLength(1);
    expect(component.find('.concis-checkGroup .groupBox .concis-checkbox-disabled')).toHaveLength(
      1
    );
  });
});
