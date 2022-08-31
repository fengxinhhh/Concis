import React from 'react';
import { Swiper } from 'concis';

export default function MenuDemos1() {
  const imgList = [
    'http://concis.org.cn/images/swiper-img1.webp',
    'http://concis.org.cn/images/swiper-img2.webp',
    'http://concis.org.cn/images/swiper-img3.webp',
    'http://concis.org.cn/images/swiper-img4.webp',
    'http://concis.org.cn/images/swiper-img5.webp',
  ];
  return <Swiper imgList={imgList} pictureSize={600} height={240} deply={3000} autoPlayer />;
}
