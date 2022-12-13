import React from 'react';
import { Alert } from 'concis';

export default function index1() {
  const margin = { margin: '15px 0' };
  return (
    <div>
      <Alert
        type="info"
        content="Here is an info text"
        style={margin}
        showClear
        closeElement="Close"
      />
      <Alert
        type="success"
        content="Here is an success text"
        style={margin}
        showClear
        closeElement="关闭"
      />
      <Alert
        type="warning"
        content="Here is an warning text"
        style={margin}
        showClear
        closeElement="取消"
      />
      <Alert type="error" content="Here is an error text" style={margin} showClear />
    </div>
  );
}
