import React from 'react';
import Input from '..';
import Select from '../../Select/index';
import Button from '../../Button/index';

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
        <div>
          <Select
            option={option}
            width={100}
            handleSelectCallback={handleSelectCallback}
            placeholder={'请选择'}
          />
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <Input placeholder="请输入" handleIptChange={handleIptChange} />
        <div style={{ marginLeft: '10px' }}>
          <Button type="primary">搜索</Button>
        </div>
      </div>
    </>
  );
}
