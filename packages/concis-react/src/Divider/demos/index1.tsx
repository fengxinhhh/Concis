import Divider from '..';
import React from 'react';
import usePageListener from '../../_util/hooks/usePageListener';
/**
 * transform: true
 */
export default function DividerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Divider');

  return (
    <div>
      <Divider>React View UI</Divider>
    </div>
  );
}
