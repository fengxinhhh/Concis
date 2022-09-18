import React from 'react';
import { Tag } from 'concis';

export default function index1() {
  const tagStyle = { margin: '0 12px' };

  return (
    <>
      <Tag style={tagStyle} tagBackground="#f53f3f" color="#ffffff">
        Tag 1
      </Tag>
      <Tag style={tagStyle} tagBackground="#00b42a" color="#ffffff">
        Tag 2
      </Tag>
      <Tag style={tagStyle} tagBackground="#ff7d00" color="#ffffff">
        Tag 3
      </Tag>
    </>
  );
}
