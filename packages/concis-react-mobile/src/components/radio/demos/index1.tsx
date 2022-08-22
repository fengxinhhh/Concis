import React from 'react';
import { Radio } from '../index';
import usePageListener from '../../../../../concis-react/src/common_utils/hooks/usePageListener';

import '../../../global/index.less';

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

      <Radio>第一项</Radio>

      <p className="mobile-demo-title">基本使用</p>

      <Radio.Group>
        <Radio value={1}>第一项</Radio>
        <Radio value={2}>第二项</Radio>
        <Radio value={3} disabled>
          第二项
        </Radio>
      </Radio.Group>

      <p className="mobile-demo-title">基本使用</p>

      <Radio.Group
        options={[
          { value: 1, label: '第一项' },
          { value: 2, label: '第二项' },
          { value: 3, label: '第三项', disabled: true },
        ]}
      />
    </>
  );
}
