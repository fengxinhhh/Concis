import React from 'react';
import { Image } from 'concis';

export default function ImageDemo1() {
  return (
    <>
      <Image
        src="https://concis.org.cn/images/swiper-img1.webp"
        width="200px"
        height="200px"
        style={{ marginRight: '20px' }}
        fit="cover"
        caption="晚霞"
      />
      <Image
        src="https://concis.org.cn/images/swiper-img5.webp"
        width="200px"
        height="200px"
        style={{ marginRight: '20px' }}
        fit="cover"
        caption="雪山风景"
        captionStyle={{ color: 'skyblue' }}
      />
      <Image
        src="https://concis.org.cn/images/swiper-img4.webp"
        width="200px"
        height="200px"
        fit="cover"
        round="10px"
        caption="湖泊"
        captionStyle={{ color: 'skyblue', textAlign: 'center' }}
      />
    </>
  );
}
