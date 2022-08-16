import React from 'react';
import Divider from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';
/**
 * transform: true
 */
export default function DividerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Divider');

  return (
    <div>
      <Divider>Concis</Divider>
    </div>
  );
}
