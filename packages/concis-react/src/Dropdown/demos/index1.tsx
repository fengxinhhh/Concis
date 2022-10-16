import React from 'react';
import { Dropdown } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function DropdownDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Dropdown');

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
      <Dropdown placeholder="Click me" data={data} />
    </div>
  );
}
