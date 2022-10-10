import React from 'react';
import { Dropdown } from 'concis';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function DropdownDemo1() {
  const data = [
    {
      content: 'Beijing',
      icon: <InfoCircleOutlined />,
      link: '#',
    },
    {
      content: 'Guangzhou',
      icon: <InfoCircleOutlined />,
      children: [
        {
          content: 'Tianhe',
          link: '#',
        },
        {
          content: 'Haizhu',
          link: '#',
          disabled: true,
        },
        {
          content: 'Yuexiu',
          link: '#',
        },
      ],
    },
    {
      content: 'Jump Google',
      icon: <InfoCircleOutlined />,
      link: 'https://www.google.com.hk/',
    },
  ];

  return (
    <div>
      <Dropdown placeholder="Click me" data={data} />
    </div>
  );
}
