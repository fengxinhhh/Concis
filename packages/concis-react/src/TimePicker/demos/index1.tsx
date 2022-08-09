import React from 'react';
import TimePicker from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('TimePicker');

  return <TimePicker />;
}
