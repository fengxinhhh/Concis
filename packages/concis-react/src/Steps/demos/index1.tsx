import React from 'react';
import { Steps, Step } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';
/**
 * transform: true
 */
export default function MenuDemos1() {
  process.env.NODE_ENV === 'production' && usePageListener('Steps');

  return (
    <Steps current={2}>
      <Step title="Waiting" />
      <Step title="In Process" />
      <Step title="Finished" />
    </Steps>
  );
}
