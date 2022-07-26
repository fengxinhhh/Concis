import React from 'react';
import Switch from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Switch');

  return <Switch />;
}
