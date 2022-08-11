import React from 'react';
import Image from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function ImageDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Image');

  const fitList = ['fill', 'contain', 'cover', 'none', 'scale-down'];

  return (
    <>
      {fitList.map((fit: any, index) => (
        <Image
          src="http://concis.org.cn/images/swiper-img5.webp"
          width="200px"
          height="200px"
          style={{ marginRight: '20px' }}
          fit={fit}
          key={index}
        />
      ))}
    </>
  );
}
