import React from 'react';
import Input from '..';

export default function InputDemo5() {
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  const handleNumChange = (h: string) => {
    console.log(h);
  };
  return (
    <Input
      type="num"
      placeholder="请输入"
      min={5}
      max={10}
      step={1.5}
      handleIptChange={handleIptChange}
      handleNumChange={handleNumChange}
    />
  );
}
