import React from 'react';
import { InputPro, Space } from 'concis';

export default function InputProDemo1() {
  const option = [
    {
      label: 'JavaScript',
    },
    {
      label: 'TypeScript',
    },
    {
      label: 'VueJS',
    },
    {
      label: 'ReactJS',
    },
  ];
  return (
    <Space direction="vertical">
      <InputPro align="left" option={option} />
      <InputPro align="right" option={option} />
      <InputPro align="top" option={option} />
      <InputPro align="bottom" option={option} />
    </Space>
  );
}
