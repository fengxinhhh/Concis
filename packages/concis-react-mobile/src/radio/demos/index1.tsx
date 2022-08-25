import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

import { Radio } from '../index';
import usePageListener from '../../../../concis-react/src/common_utils/hooks/usePageListener';

import '../../global/index.less';

export default function ButtonDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Button');

  return (
    <>
      <p className="mobile-demo-title">基本使用</p>

      <Radio>第一项</Radio>

      <p className="mobile-demo-title">禁用状态</p>

      <Radio disabled>第一项</Radio>

      <p className="mobile-demo-title">单选框组</p>

      <Radio.Group block defaultValue={1}>
        <Radio value={1} block>
          第一项
        </Radio>
        <Radio value={2}>第二项</Radio>
        <Radio value={3} disabled>
          第二项
        </Radio>
      </Radio.Group>

      <p className="mobile-demo-title">配置式单选框组</p>

      <Radio.Group
        block
        options={[
          { value: 1, label: '第一项' },
          { value: 2, label: '第二项' },
          { value: 3, label: '第三项', disabled: true },
        ]}
      />

      <p className="mobile-demo-title">占满整行宽度</p>

      <Radio block>第一项</Radio>

      <Radio.Group block>
        <Radio value={1}>第一项</Radio>
        <Radio value={2}>第二项</Radio>
        <Radio value={3}>第二项</Radio>
      </Radio.Group>

      <p className="mobile-demo-title">自定义大小</p>

      <Radio size="small" block>
        小
      </Radio>

      <Radio size="middle" block>
        中
      </Radio>

      <Radio size="large" block>
        大
      </Radio>

      <p className="mobile-demo-title">自定义图标</p>

      <Radio icon={<FrownOutlined />} block>
        第一项
      </Radio>

      <Radio
        icon={(checked) => {
          if (checked) return <FrownOutlined style={{ color: 'var(--concis-color-primary)' }} />;
          return <FrownOutlined />;
        }}
        block
      >
        第一项
      </Radio>
    </>
  );
}
