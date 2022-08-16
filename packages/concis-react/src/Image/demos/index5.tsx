import React from 'react';
import Image from '..';

export default function ImageDemo1() {
  const previewList = [
    'http://concis.org.cn/images/swiper-img1.webp',
    'http://concis.org.cn/images/swiper-img5.webp',
    'http://concis.org.cn/images/swiper-img4.webp',
  ];

  return (
    <Image
      src="http://concis.org.cn/images/swiper-img1.webp"
      width="200px"
      height="200px"
      fit="cover"
      preview={previewList}
    />
  );
}
