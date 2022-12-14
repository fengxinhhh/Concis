import React from 'react';
import { Nav } from 'concis';
import { NavDemoStyle } from './demo';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Nav');

  const navData = [
    {
      label: 'Products',
      link: '#',
    },
    {
      label: 'Services',
      link: '#',
    },
    {
      label: 'Developers',
      link: '#',
    },
    {
      label: 'Use Cases',
      link: '#',
    },
    {
      label: 'Customers',
      link: '#',
    },
    {
      label: 'Company',
      link: '#',
    },
  ];

  return (
    <NavDemoStyle>
      <Nav navData={navData} />
    </NavDemoStyle>
  );
}
