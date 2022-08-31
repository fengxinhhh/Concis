import React from 'react';
import { Image } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function ImageDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Image');

  return <Image src="http://concis.org.cn/images/swiper-img5.webp" width="200px" />;
}
