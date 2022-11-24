import React from 'react';
import { Nav, Button } from 'concis';
import { NavDemoStyle } from './demo';

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
  const leftSlot = (
    <div className="left-bar">
      <b>Concis</b>
      <p>github star 10000+</p>
    </div>
  );
  const rightSlot = (
    <div className="right-bar">
      <Button height={30}>Login</Button>
      <Button type="danger" height={30} style={{ marginLeft: 20 }}>
        Try it now
      </Button>
    </div>
  );

  return (
    <NavDemoStyle>
      <Nav navData={navData} leftSlot={leftSlot} rightSlot={rightSlot} />
    </NavDemoStyle>
  );
}
