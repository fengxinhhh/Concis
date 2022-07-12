import React from 'react';
import Input from '..';

export default function InputDemo3() {
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  return <Input placeholder="请输入" showClear handleIptChange={handleIptChange} />;
}
