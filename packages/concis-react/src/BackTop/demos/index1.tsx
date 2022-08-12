import React from 'react';
import { BackTop } from 'concis';

export default function BackTopDemo1() {
  return (
    <>
      <div style={{ height: 200 }}>让滚动条飞一会儿</div>
      <BackTop visibilityHeight={200} />
    </>
  );
}
