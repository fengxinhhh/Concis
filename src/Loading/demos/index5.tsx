import React from 'react';
import Loading from '..';

export default function LoadingDemo1() {
  return (
    <div style={{ position: 'relative', width: '100px', height: '40px' }}>
      <Loading width="1em" height="1em" />
      <Loading width="2em" height="2em" style={{ marginLeft: '50px' }} />
      <Loading width="3em" height="3em" style={{ marginLeft: '100px' }} />
    </div>
  );
}
