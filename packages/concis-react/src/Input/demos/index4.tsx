import React from 'react';
import Input from '..';

export default function InputDemo4() {
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  return (
    <Input type="password" placeholder="请输入" showTogglePwd handleIptChange={handleIptChange} />
  );
}
