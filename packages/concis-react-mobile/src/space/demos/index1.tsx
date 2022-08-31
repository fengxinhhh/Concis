import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

import { Space, Button } from '../../index';

import '../../global/index.less';

export default function ButtonDemo1() {
  return (
    <>
      <p className="mobile-demo-title">水平方向的间距</p>

      <Space>
        <Button type="primary">按钮1</Button>
        <Button type="primary">按钮2</Button>
        <Button type="primary">按钮3</Button>
      </Space>

      <p className="mobile-demo-title">换行</p>

      <Space wrap size={[20, 10]}>
        <Button type="primary">按钮1</Button>
        <Button type="primary">按钮2</Button>
        <Button type="primary">按钮3</Button>
        <Button type="primary">按钮4</Button>
        <Button type="primary">按钮5</Button>
        <Button type="primary">按钮6</Button>
        <Button type="primary">按钮7</Button>
        <Button type="primary">按钮8</Button>
      </Space>

      <p className="mobile-demo-title">垂直方向的间距</p>

      <Space direction="vertical">
        <Button type="primary">按钮1</Button>
        <Button type="primary">按钮2</Button>
        <Button type="primary">按钮3</Button>
      </Space>

      <p className="mobile-demo-title">自定义间距大小</p>

      <Space size={33}>
        <Button type="primary">按钮1</Button>
        <Button type="primary">按钮2</Button>
        <Button type="primary">按钮3</Button>
      </Space>

      <p className="mobile-demo-title">渲染为块级元素</p>

      <Space block direction="vertical">
        <Button type="primary" block>
          按钮1
        </Button>
        <Button type="primary" block>
          按钮2
        </Button>
        <Button type="primary" block>
          按钮3
        </Button>
      </Space>

      <p className="mobile-demo-title">主轴对齐方式</p>

      <Space block justify="center">
        <Button type="primary">1</Button>
        <Button type="primary">22</Button>
        <Button type="primary">333</Button>
      </Space>

      <p className="mobile-demo-title">交叉轴对齐方式</p>

      <Space align="center">
        <Button type="primary" size="small">
          1
        </Button>
        <Button type="primary" size="middle">
          22
        </Button>
        <Button type="primary" size="large">
          333
        </Button>
      </Space>
    </>
  );
}
