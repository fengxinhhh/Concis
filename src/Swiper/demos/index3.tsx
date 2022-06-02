import React from 'react';
import Swiper from '..';

export default function MenuDemos1() {
  const imgList = [
    'http://react-view-ui.com:92/images/swiper-img1.webp',
    'http://react-view-ui.com:92/images/swiper-img2.webp',
    'http://react-view-ui.com:92/images/swiper-img3.webp',
    'http://react-view-ui.com:92/images/swiper-img4.webp',
    'http://react-view-ui.com:92/images/swiper-img5.webp',
  ];
  return <Swiper imgList={imgList} pictureSize={500} height={240} deply={3000} card autoPlayer />;
}
