import React from 'react';
import { Select } from 'concis';
/**
 * transform: true
 */
export default function SelectDemo1() {
  const style = { margin: '0 8px' };
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
  const handleSelectCallback = (v: number) => {
    console.log(v);
  };
  return (
    <div style={{ display: 'flex' }}>
      <Select
        type="primary"
        style={style}
        option={option}
        width={100}
        handleSelectCallback={handleSelectCallback}
        placeholder="请选择"
      />
      <Select
        type="error"
        style={style}
        option={option}
        width={100}
        handleSelectCallback={handleSelectCallback}
        placeholder="请选择"
      />
      <Select
        type="warning"
        style={style}
        option={option}
        width={100}
        handleSelectCallback={handleSelectCallback}
        placeholder="请选择"
      />
      <Select
        type="success"
        style={style}
        option={option}
        width={100}
        handleSelectCallback={handleSelectCallback}
        placeholder="请选择"
      />
    </div>
  );
}
