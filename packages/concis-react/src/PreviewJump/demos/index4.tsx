import React from 'react';
import { PreviewJump, Link } from 'concis';
import '../styles/demo.less';

export default function PreviewDemo1() {
  return (
    <div className="preview-demo">
      <PreviewJump link="#" style={{ width: 600, height: 240 }}>
        <img src="http://concis.org.cn/images/swiper-img5.webp" />
      </PreviewJump>
      <div className="introduce">
        <h1>Beautiful scenery</h1>
        <p>Let's see the beautiful scenery together</p>
        <Link href="#">Read more</Link>
      </div>
    </div>
  );
}
