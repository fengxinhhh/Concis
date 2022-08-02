import React from 'react';
import Button from '..';
import usePageListener from '../../../../concis-react/src/common_utils/hooks/usePageListener';

export default function ButtonDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Button');

  const buttonStyle = { margin: '8px' };
  const style = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  return (
    <>
      <p className="mobile-demo-title">基本使用</p>
      <div style={style}>
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
      <p className="mobile-demo-title">长按钮</p>
      <div style={style}>
        <Button type="primary" style={buttonStyle} width={90} height={40}>
          small
        </Button>
        <Button type="danger" style={buttonStyle} width={120} height={40}>
          big
        </Button>
        <Button type="warning" style={buttonStyle} width={150} height={40}>
          large
        </Button>
      </div>
      <p className="mobile-demo-title">字体按钮</p>
      <div style={style}>
        <Button type="primary" style={buttonStyle} width={30} height={30} circle>
          P
        </Button>
        <Button type="danger" style={buttonStyle} width={30} height={30} circle>
          D
        </Button>
        <Button type="warning" style={buttonStyle} width={30} height={30} circle>
          W
        </Button>
        <Button type="info" style={buttonStyle} width={30} height={30} circle>
          H
        </Button>
        <Button type="text" style={buttonStyle} width={30} height={30} circle>
          T
        </Button>
      </div>
      <p className="mobile-demo-title">禁用按钮</p>
      <div style={style}>
        <Button type="primary" style={buttonStyle} disabled>
          禁用按钮
        </Button>
        <Button type="danger" style={buttonStyle} disabled>
          禁用按钮
        </Button>
        <Button type="warning" style={buttonStyle} disabled>
          禁用按钮
        </Button>
        <Button type="info" style={buttonStyle} disabled>
          禁用按钮
        </Button>
        <Button type="text" style={buttonStyle} disabled>
          禁用按钮
        </Button>
      </div>
      <p className="mobile-demo-title">虚线按钮</p>
      <div style={style}>
        <Button type="primary" style={buttonStyle} dashed>
          虚线按钮
        </Button>
        <Button type="danger" style={buttonStyle} dashed>
          虚线按钮
        </Button>
        <Button type="warning" style={buttonStyle} dashed>
          虚线按钮
        </Button>
        <Button type="info" style={buttonStyle} dashed>
          虚线按钮
        </Button>
        <Button type="text" style={buttonStyle} dashed>
          虚线按钮
        </Button>
      </div>
      <p className="mobile-demo-title">加载按钮</p>
      <div style={style}>
        <Button type="primary" style={buttonStyle} loading>
          加载按钮
        </Button>
        <Button type="danger" style={buttonStyle} loading>
          加载按钮
        </Button>
        <Button type="warning" style={buttonStyle} loading>
          加载按钮
        </Button>
        <Button type="info" style={buttonStyle} loading>
          加载按钮
        </Button>
        <Button type="text" style={buttonStyle} loading>
          加载按钮
        </Button>
      </div>
    </>

  );
}
