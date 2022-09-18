import React from 'react';
import { Tag } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Tag');
  const tagStyle = { margin: '0 12px' };

  return (
    <>
      <Tag style={tagStyle}>Tag 1</Tag>
      <Tag style={tagStyle}>Tag 2</Tag>
      <Tag style={tagStyle}>Tag 3</Tag>
    </>
  );
}
