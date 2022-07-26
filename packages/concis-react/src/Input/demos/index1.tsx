import React from 'react';
import Input from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function InputDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Input');

  const handleIptChange = (h: string) => {
    console.log(h);
  };
  return <Input placeholder="请输入" width="200" handleIptChange={handleIptChange} />;
}
