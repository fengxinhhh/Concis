import React from 'react';
import { Image } from 'concis';

export default function ImageDemo1() {
  const previewList = [
    'https://concis.org.cn/images/swiper-img1.webp',
    'https://concis.org.cn/images/swiper-img5.webp',
    'https://concis.org.cn/images/swiper-img4.webp',
  ];

  return (
    <Image
      src="https://concis.org.cn/images/swiper-img1.webp"
      width="200px"
      height="200px"
      fit="cover"
      preview={previewList}
    />
  );
}
