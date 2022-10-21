import React from 'react';
import { Image } from 'concis';

export default function ImageDemo1() {
  return (
    <Image
      src="https://concis.org.cn/images/swiper-img5.webp"
      width="200px"
      height="200px"
      fit="cover"
      preview
    />
  );
}
