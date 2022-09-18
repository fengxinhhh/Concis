import React from 'react';
import { Empty } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Empty');

  return <Empty />;
}
