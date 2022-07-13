import React from 'react';
import Switch from '..';

export default function index1() {
  return (
    <>
      <Switch loading />
      <Switch defaultChecked={true} loading />
    </>
  );
}
