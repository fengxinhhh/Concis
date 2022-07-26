import React from 'react';
import Space from '..';
import Button from '../../Button';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Space');

  return (
    <Space>
      <Button type="primary">Button1</Button>
      <Button type="primary">Button2</Button>
      <Button type="primary">Button3</Button>
    </Space>
  );
}
