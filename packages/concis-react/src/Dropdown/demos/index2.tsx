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
      <Dropdown placeholder="Hover me" data={data} type="hover" />
    </div>
  );
}
