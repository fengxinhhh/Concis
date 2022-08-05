import React, { useState } from 'react';
import TimePicker from '..';

export default function index2() {
  const [showClear, setShowClear] = useState(false);

  return <TimePicker showClear={showClear}></TimePicker>;
}
