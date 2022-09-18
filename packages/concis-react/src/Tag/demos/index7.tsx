import React from 'react';
import { Tag } from 'concis';

export default function index1() {
  const tagStyle = { margin: '0 12px' };

  return (
    <>
      <Tag style={tagStyle} size="large" closeable>
        Large
      </Tag>
      <Tag style={tagStyle} size="medium" closeable>
        Medium
      </Tag>
      <Tag style={tagStyle} size="default" closeable>
        Default
      </Tag>
      <Tag style={tagStyle} size="small" closeable>
        Small
      </Tag>
    </>
  );
}
