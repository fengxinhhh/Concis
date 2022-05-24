import React from 'react';
import Steps from '..';
import Step from '../Step';
/**
 * transform: true
 */
export default function MenuDemos1() {
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
    <Steps current={2}>
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
