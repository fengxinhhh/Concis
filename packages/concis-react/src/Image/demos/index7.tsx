import React from 'react';
import { EyeOutlined, UploadOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Image } from 'concis';

export default function ImageDemo1() {
  return (
    <>
      <Image
        src="https://concis.org.cn/images/swiper-img1.webp"
        width="200px"
        height="200px"
        fit="cover"
        round="5px"
        preview
        previewRender={(preview: any) => {
          return (
            <div>
              <EyeOutlined onClick={preview} />
              <UploadOutlined />
              <CloseCircleOutlined />
            </div>
          );
        }}
      />
    </>
  );
}
