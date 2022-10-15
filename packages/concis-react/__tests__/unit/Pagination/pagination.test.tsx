import React from 'react';
import Pagination from '../../../src/Pagination/index';
import { sleep } from '../../sleep';
import Enzyme from '../../setup';
import renderTest from '../../mountTest';

const { mount } = Enzyme;

renderTest(Pagination);

describe('Pagination', () => {
  it('test base pagination show correctly', () => {
    const component = mount(<Pagination total={50} />);
    expect(component.find('.concis-pagination').length).toBe(1);
    expect(component.find('.concis-pagination .concis-pagination-numberBox').length).toBe(5);
  });

  it('test pagination click callback correctly', () => {
    const mockFn = jest.fn();
    const component = mount(<Pagination total={50} changePageCallback={mockFn} />);
    component.find('.concis-pagination .concis-pagination-numberBox').at(1).simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('test large number pagination show correctly', () => {
    const component = mount(<Pagination defaultIndex={3} total={200} />);
    expect(component.find('.concis-pagination .concis-pagination-numberBox').at(7).text()).toBe(
      '20',
    );
    expect(
      component.find('.concis-pagination .concis-pagination-numberBox').at(2).getDOMNode()
        .className,
    ).toBe('concis-pagination-actived  concis-pagination-numberBox');
  });

  it('test pagination with select show correctly', async () => {
    const component = mount(
      <Pagination total={200} showSizeChanger pageSizeOptions={[10, 20, 30, 50]} />,
    );
    expect(component.find('.concis-pagination .concis-select').length).toBe(1);
    component.find('.concis-pagination .concis-select .selected').simulate('click');
    await sleep(200);
    component.find('.concis-pagination .concis-select .option').at(3).simulate('click');
    expect(component.find('.concis-pagination .concis-pagination-numberBox').length).toBe(4);
  });

  it('test pagination with input show correctly', async () => {
    const component = mount(
      <Pagination total={200} showSizeChanger pageSizeOptions={[10, 20, 30, 50]} showJumpInput />,
    );
    expect(component.find('.concis-pagination .concis-pagination-jumpBox').length).toBe(1);
    const input = component.find('.concis-pagination .concis-pagination-jumpBox input');
    input.simulate('change', {
      target: { value: 2 },
    });
    input.simulate('keyup', {
      keyCode: 13,
    });
    component.update();
    input.update();
    setTimeout(() => {
      expect(
        component.find('.concis-pagination .concis-pagination-numberBox').at(1).getDOMNode()
          .className,
      ).toBe('concis-pagination-actived  concis-pagination-numberBox');
    }, 200);
  });
});
