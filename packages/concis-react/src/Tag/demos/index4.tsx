import React, { useState } from 'react';
import { Tag } from 'concis';

export default function index1() {
  const [color1, setColor1] = useState('#ffffff');
  const [color2, setColor2] = useState('#ffffff');
  const [color3, setColor3] = useState('#ffffff');
  const tagStyle = { margin: '0 12px' };

  return (
    <>
      <Tag
        style={tagStyle}
        tagBackground="#f53f3f"
        color={color1}
        checkable
        checkCallback={(visible: boolean) => setColor1(visible ? '#ffffff' : '#000000')}
      >
        Tag 1
      </Tag>
      <Tag
        style={tagStyle}
        tagBackground="#00b42a"
        color={color2}
        checkable
        checkCallback={(visible: boolean) => setColor2(visible ? '#ffffff' : '#000000')}
      >
        Tag 2
      </Tag>
      <Tag
        style={tagStyle}
        tagBackground="#ff7d00"
        color={color3}
        checkable
        checkCallback={(visible: boolean) => setColor3(visible ? '#ffffff' : '#000000')}
      >
        Tag 3
      </Tag>
    </>
  );
}
