import React from 'react';
import Input from '..';
import Select from '../../Select';
import Button from '../../Button';
import Space from '../../Space';

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
      <Space direction="vertical">
        <Space size="large">
          <Input placeholder="请输入" handleIptChange={handleIptChange} />
          <Select
            option={option}
            width={100}
            handleSelectCallback={handleSelectCallback}
            placeholder={'请选择'}
          />
        </Space>
        <Space size="large">
          <Input placeholder="请输入" handleIptChange={handleIptChange} />
          <Button type="primary">搜索</Button>
        </Space>
      </Space>
    </>
  );
}
