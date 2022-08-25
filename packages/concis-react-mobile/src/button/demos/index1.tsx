import React from 'react';
import { Button } from '../index';
import usePageListener from '../../../../concis-react/src/common_utils/hooks/usePageListener';

import '../../global/index.less';

export default function ButtonDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Button');

  const buttonStyle = { margin: '8px' };

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <>
      <p className="mobile-demo-title">基本使用</p>
      <div style={style}>
        <Button type="primary" ghost>
          基础按钮
        </Button>
        <Button type="danger">危险按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="text">文本按钮</Button>
      </div>

      <p className="mobile-demo-title">长按钮</p>
      <div style={style}>
        <Button type="primary" size="small">
          small
        </Button>
        <Button type="danger" size="middle">
          big
        </Button>
        <Button type="warning" size="large">
          large
        </Button>
      </div>

      <p className="mobile-demo-title">字体按钮</p>
      <div style={style}>
        <Button type="primary">PPPPPP</Button>
        <Button type="danger" shape="round">
          DDDDDDDD
        </Button>
        <Button type="warning" shape="circle">
          W
        </Button>
      </div>

      <p className="mobile-demo-title">禁用按钮</p>
      <div style={style}>
        <Button type="primary" disabled>
          禁用按钮
        </Button>
        <Button type="danger" disabled>
          禁用按钮
        </Button>
        <Button type="warning" disabled>
          禁用按钮
        </Button>
        <Button type="text" disabled>
          禁用按钮
        </Button>
      </div>

      <p className="mobile-demo-title">虚线按钮</p>
      <div style={style}>
        <Button type="primary" dashed ghost>
          虚线按钮
        </Button>
        <Button type="danger" dashed ghost>
          虚线按钮
        </Button>
        <Button type="warning" dashed ghost>
          虚线按钮
        </Button>
        <Button type="text" dashed ghost>
          虚线按钮
        </Button>
      </div>

      <p className="mobile-demo-title">加载按钮</p>
      <div style={style}>
        <Button type="primary" loading>
          加载按钮
        </Button>
        <Button type="danger" loading>
          加载按钮
        </Button>
        <Button type="warning" loading>
          加载按钮
        </Button>
        <Button type="text" loading>
          加载按钮
        </Button>
      </div>

      <p className="mobile-demo-title">危险按钮</p>
      <div style={style}>
        <Button type="primary" danger>
          primary
        </Button>
        <Button type="danger" danger ghost>
          ghost
        </Button>
        <Button type="warning" danger ghost dashed>
          dashed
        </Button>
        <Button type="text" danger>
          text
        </Button>
      </div>
    </>
  );
}
