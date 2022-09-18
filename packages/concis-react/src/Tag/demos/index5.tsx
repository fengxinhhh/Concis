import React from 'react';
import { Tag } from 'concis';

export default function index1() {
  const tagStyle = { margin: '0 12px' };

  return (
    <>
      <Tag style={tagStyle} closeable>
        Tag 1
      </Tag>
      <Tag style={tagStyle} closeable>
        Tag 2
      </Tag>
      <Tag style={tagStyle} closeable>
        Tag 3
      </Tag>
    </>
  );
}
