import React, { useState } from 'react';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';
import Steps from '../../../src/Steps';
import Step from '../../../src/Steps/Step';

const { mount } = Enzyme;

mountTest(Steps);
mountTest(Step);

function MenuDemos1() {
  const [current, setCurrent] = useState(1);
  const stepsData = [
    {
      title: 'Waiting',
      subTitle: 'subTitle',
      description: 'this is description',
    },
    {
      title: 'In Process',
      subTitle: 'subTitle',
      description: 'this is description',
    },
    {
      title: 'Finished',
      subTitle: 'subTitle',
      description: 'this is description',
    },
  ];

  return (
    <Steps onChange={setCurrent} current={current}>
      {stepsData.map((step) => {
        return (
          <Step
            key={step.title}
            title={step.title}
            subTitle={step.subTitle}
            description={step.description}
          />
        );
      })}
    </Steps>
  );
}

describe('Steps', () => {
  it('test base Steps render correctly', () => {
    const wrapper = mount(
      <Steps current={1}>
        <Step title="Waiting" />
        <Step title="In Process" />
        <Step title="Finished" />
      </Steps>
    );
    expect(wrapper.find('.concis-steps').length).toBe(1);
    expect(wrapper.find('.step-box').length).toBe(3);
    expect(
      wrapper.find('.step-box').at(0).find('span').at(0).getDOMNode().getAttribute('class')
    ).toBe('active-index');
  });
  it('test Steps event callback', () => {
    const wrapper = mount(<MenuDemos1 />);
    wrapper.find('.step-box').at(1).simulate('click');
    expect(
      wrapper.find('.step-box').at(1).find('span').at(0).getDOMNode().getAttribute('class')
    ).toBe('active-index');
    expect(
      wrapper.find('.step-box').at(0).find('span').at(0).getDOMNode().getAttribute('class')
    ).toBe('anticon anticon-check');
    expect(
      wrapper.find('.step-box').at(2).find('span').at(0).getDOMNode().getAttribute('class')
    ).toBe('after-index');
    expect(wrapper.find(Steps).props().current).toBe(2);
  });
});
