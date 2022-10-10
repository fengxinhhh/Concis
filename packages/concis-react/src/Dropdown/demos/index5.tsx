import React from 'react';
import { Dropdown } from 'concis';

export default function DropdownDemo1() {
  const data = [
    {
      content: 'Beijing',
      link: '#',
    },
    {
      content: 'Guangzhou',
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
      link: 'https://www.google.com.hk/',
    },
  ];

  return (
    <div>
      <Dropdown placeholder="Top" data={data} position="top" style={{ margin: '0 16px' }} />
      <Dropdown placeholder="Bottom" data={data} position="bottom" style={{ margin: '0 16px' }} />
      <Dropdown placeholder="Left" data={data} position="left" style={{ margin: '0 16px' }} />
      <Dropdown placeholder="Right" data={data} position="right" style={{ margin: '0 16px' }} />
    </div>
  );
}
