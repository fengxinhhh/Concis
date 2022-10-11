import React from 'react';
import { Nav } from 'concis';
import '../styles/demo.less';

export default function index1() {
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
    <div>
      <Nav navData={navData} />
    </div>
  );
}
