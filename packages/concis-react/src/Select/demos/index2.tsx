import React from 'react';
import Select from '..';
/**
 * transform: true
 */
export default function SelectDemo1() {
  const option = [
    {
      label: 'Lucy',
      value: 'lucy',
    },
    {
      label: 'Mike',
      value: 'mike',
    },
    {
      label: 'Jack',
      value: 'jack',
    },
  ];
  const handleSelectCallback = (v: number) => {
    console.log(v);
  };
  return (
    <Select
      option={option}
      width={200}
      disabled
      handleSelectCallback={handleSelectCallback}
      placeholder={'请选择'}
    />
  );
}
