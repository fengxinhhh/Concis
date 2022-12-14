import React from 'react';
import { Alert } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Alert');

  return (
    <div>
      <Alert content="Here is an example text" />
    </div>
  );
}
