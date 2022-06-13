import React from 'react';
import Swiper from '..';
import usePageListener from '../../_util/hooks/usePageListener';

export default function MenuDemos1() {
  process.env.NODE_ENV === 'production' && usePageListener('Swiper');

  const imgList = [
    'http://react-view-ui.com:92/images/swiper-img1.webp',
    'http://react-view-ui.com:92/images/swiper-img2.webp',
    'http://react-view-ui.com:92/images/swiper-img3.webp',
    'http://react-view-ui.com:92/images/swiper-img4.webp',
    'http://react-view-ui.com:92/images/swiper-img5.webp',
  ];
  return <Swiper imgList={imgList} pictureSize={600} height={240} />;
}
