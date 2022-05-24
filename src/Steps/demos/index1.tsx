import React from 'react';
import Steps from '..';
import Step from '../Step';
/**
 * transform: true
 */
export default function MenuDemos1() {
  return (
    <Steps current={2}>
      <Step title="Waiting" />
      <Step title="In Process" />
      <Step title="Finished" />
    </Steps>
  );
}
