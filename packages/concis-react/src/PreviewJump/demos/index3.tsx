import React from 'react';
import { ToTopOutlined } from '@ant-design/icons';
import { PreviewJump } from 'concis';
import { DemoStyle } from './demoStyle';

export default function PreviewDemo1() {
  const jumpContent = (
    <>
      <ToTopOutlined />
      <span style={{ marginLeft: 15 }}>预览</span>
    </>
  );

  return (
    <DemoStyle>
      <PreviewJump link="#" jumpContent={jumpContent}>
        <img src="https://concis.org.cn/images/swiper-img5.webp" />
      </PreviewJump>
    </DemoStyle>
  );
}
