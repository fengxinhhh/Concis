import React from 'react';
import { ToTopOutlined } from '@ant-design/icons';
import { PreviewJump } from 'concis';

export default function PreviewDemo1() {
  const jumpContent = (
    <>
      <ToTopOutlined />
      <span style={{ marginLeft: 15 }}>预览</span>
    </>
  );
  return (
    <PreviewJump link="#" jumpContent={jumpContent}>
      <img src="https://concis.org.cn/images/swiper-img5.webp" />
    </PreviewJump>
  );
}
