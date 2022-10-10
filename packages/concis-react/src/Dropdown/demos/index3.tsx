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
      <Dropdown placeholder="Click me" data={data} status="primary" style={{ margin: '0 8px' }} />
      <Dropdown placeholder="Click me" data={data} status="error" style={{ margin: '0 8px' }} />
      <Dropdown placeholder="Click me" data={data} status="warning" style={{ margin: '0 8px' }} />
      <Dropdown placeholder="Click me" data={data} status="success" style={{ margin: '0 8px' }} />
    </div>
  );
}
