import React from 'react';
import Input from '..';

export default function InputDemo1() {
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  return <Input placeholder="请输入" width="200" handleIptChange={handleIptChange} />;
}
