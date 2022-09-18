import React from 'react';
import { Tag } from 'concis';

export default function index1() {
  const tagStyle = { margin: '0 12px' };

  return (
    <>
      <Tag style={tagStyle} color="#f53f3f">
        Tag 1
      </Tag>
      <Tag style={tagStyle} color="#00b42a">
        Tag 2
      </Tag>
      <Tag style={tagStyle} color="#ff7d00">
        Tag 3
      </Tag>
    </>
  );
}
