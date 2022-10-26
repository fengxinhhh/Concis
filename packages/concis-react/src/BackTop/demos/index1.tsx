/**
 * iframe: 400
 */
import React from 'react';
import { BackTop } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function BackTopDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('BackTop');

  return (
    <>
      <div style={{ fontSize: 16, padding: 20 }}>
        <div style={{ height: 600 }}>让滚动条飞一会儿</div>
        <BackTop visibilityHeight={200} />
      </div>
    </>
  );
}
