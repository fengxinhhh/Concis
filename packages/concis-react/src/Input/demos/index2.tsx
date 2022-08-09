import React from 'react';
import Input from '..';
import Select from '../../Select';
import Button from '../../Button';

export default function InputDemo2() {
  const option = [
    {
      label: 'Mucy',
      value: 'mucy',
    },
    {
      label: 'Mike',
      value: 'mike',
    },
    {
      label: 'aMck',
      value: 'amck',
    },
  ];
  const handleSelectCallback = (h: number) => {
    console.log(h);
  };
  const handleIptChange = (h: string) => {
    console.log(h);
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Input placeholder="请输入" handleIptChange={handleIptChange} />
        <Select
          option={option}
          width={100}
          handleSelectCallback={handleSelectCallback}
          placeholder="请选择"
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <Input placeholder="请输入" handleIptChange={handleIptChange} />
        <Button type="primary" style={{ marginLeft: '10px' }}>
          搜索
        </Button>
      </div>
    </>
  );
}
