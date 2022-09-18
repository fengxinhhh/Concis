import React from 'react';
import { BackTop } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function BackTopDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Tag');

  return (
    <>
      <div>让滚动条飞一会儿</div>
      <BackTop visibilityHeight={200} />
    </>
  );
}
