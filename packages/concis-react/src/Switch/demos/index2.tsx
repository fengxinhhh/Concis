import React from 'react';
import Switch from '..';

export default function index1() {
  return (
    <>
      <Switch disabled />
      <Switch defaultChecked={true} disabled />
    </>
  );
}
