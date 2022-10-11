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
  const navContent = [
    <div className="menu1">
      <p className="title">Product</p>
      <div className="menu-list">
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
      </div>
    </div>,
    <div className="menu2">
      <p className="title">Product</p>
      <div className="menu-list">
        <div className="menu2-item">
          <span>Product 2</span>
          <p>product2 introduce</p>
        </div>
        <div className="menu2-item">
          <span>Product 2</span>
          <p>product2 introduce</p>
        </div>
        <div className="menu2-item">
          <span>Product 2</span>
          <p>product2 introduce</p>
        </div>
      </div>
    </div>,
    <div className="menu1">
      <p className="title">Product</p>
      <div className="menu-list">
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
      </div>
    </div>,
    <div className="menu2">
      <p className="title">Product</p>
      <div className="menu-list">
        <div className="menu2-item">
          <span>Product 2</span>
          <p>product2 introduce</p>
        </div>
        <div className="menu2-item">
          <span>Product 2</span>
          <p>product2 introduce</p>
        </div>
        <div className="menu2-item">
          <span>Product 2</span>
          <p>product2 introduce</p>
        </div>
      </div>
    </div>,
    <div className="menu1">
      <p className="title">Product</p>
      <div className="menu-list">
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
        <div className="menu1-item">
          <span>Product 1</span>
          <p>product1 introduce</p>
        </div>
      </div>
    </div>,
    <div>Hello! concis.</div>,
  ];

  return (
    <div>
      <Nav navData={navData} navContent={navContent} />
    </div>
  );
}
