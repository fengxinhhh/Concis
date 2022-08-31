import React from 'react';
import { Image } from 'concis';

export default function ImageDemo1() {
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
