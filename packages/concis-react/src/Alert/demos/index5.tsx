import React from 'react';
import Alert from '..';

export default function index1() {
  const margin = { margin: '15px 0' };
  return (
    <div>
      <Alert type="info" content="Here is an info text" style={margin} title="Info" />
      <Alert type="success" content="Here is an success text" style={margin} title="Success" />
      <Alert type="warning" content="Here is an warning text" style={margin} title="Warning" />
      <Alert type="error" content="Here is an error text" style={margin} title="Error" />
    </div>
  );
}
