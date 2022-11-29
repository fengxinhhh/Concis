import React from 'react';
import { PreviewJump } from 'concis';
import { DemoStyle } from './demoStyle';

export default function PreviewDemo1() {
  return (
    <DemoStyle>
      <PreviewJump link="#" disabled>
        <img src="https://concis.org.cn/images/swiper-img5.webp" />
      </PreviewJump>
    </DemoStyle>
  );
}
