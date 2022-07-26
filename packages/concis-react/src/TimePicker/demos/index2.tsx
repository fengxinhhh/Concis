import React, { useState } from 'react';
import TimePicker from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index2() {
  process.env.NODE_ENV === 'production' && usePageListener('TimePicker');
  const [showClear, setShowClear] = useState(false);
  return <TimePicker showClear={showClear}></TimePicker>;
}
