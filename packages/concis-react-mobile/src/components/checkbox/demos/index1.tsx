import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

import { Checkbox } from '../index';
import usePageListener from '../../../../../concis-react/src/common_utils/hooks/usePageListener';

import '../../../global/index.less';

export default function ButtonDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Button');

  return (
    <>
      <p className="mobile-demo-title">基本使用</p>

      <Checkbox>第一项</Checkbox>

      <p className="mobile-demo-title">禁用状态</p>

      <Checkbox disabled>第一项</Checkbox>

      <p className="mobile-demo-title">单选框组</p>

      <Checkbox.Group block defaultValue={[1]}>
        <Checkbox value={1} block>
          第一项
        </Checkbox>
        <Checkbox value={2}>第二项</Checkbox>
        <Checkbox value={3} disabled>
          第二项
        </Checkbox>
      </Checkbox.Group>

      <p className="mobile-demo-title">配置式单选框组</p>

      <Checkbox.Group
        block
        options={[
          { value: 1, label: '第一项' },
          { value: 2, label: '第二项' },
          { value: 3, label: '第三项', disabled: true },
        ]}
      />

      <p className="mobile-demo-title">占满整行宽度</p>

      <Checkbox block>第一项</Checkbox>

      <Checkbox.Group block>
        <Checkbox value={1}>第一项</Checkbox>
        <Checkbox value={2}>第二项</Checkbox>
        <Checkbox value={3}>第二项</Checkbox>
      </Checkbox.Group>

      <p className="mobile-demo-title">自定义大小</p>

      <Checkbox size="small" block>
        小
      </Checkbox>

      <Checkbox size="middle" block>
        中
      </Checkbox>

      <Checkbox size="large" block>
        大
      </Checkbox>

      <p className="mobile-demo-title">自定义图标</p>

      <Checkbox icon={<FrownOutlined />} block>
        第一项
      </Checkbox>

      <Checkbox
        icon={(checked) => {
          if (checked) return <FrownOutlined style={{ color: 'var(--ccsm-color-primary)' }} />;
          return <FrownOutlined />;
        }}
        block
      >
        第一项
      </Checkbox>
    </>
  );
}
