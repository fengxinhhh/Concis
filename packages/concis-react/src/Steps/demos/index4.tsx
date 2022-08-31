import React, { useState } from 'react';
import { Steps, Step } from 'concis';
/**
 * transform: true
 */
export default function MenuDemos1() {
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

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <Steps current={current} onChange={onChange}>
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
