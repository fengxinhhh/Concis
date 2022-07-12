import React from 'react';
import Button from '..';
import usePageListener from '../../../../../scripts/common_utils/hooks/usePageListener';

export default function ButtonDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Button');

  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle}>
        基础按钮
      </Button>
      <Button type="danger" style={buttonStyle}>
        危险按钮
      </Button>
      <Button type="warning" style={buttonStyle}>
        警告按钮
      </Button>
      <Button type="info" style={buttonStyle}>
        信息按钮
      </Button>
      <Button type="text" style={buttonStyle}>
        文本按钮
      </Button>
    </div>
  );
}
