import React from 'react';
import InputPro from '..';

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
  return <InputPro align="right" option={option} />;
}
