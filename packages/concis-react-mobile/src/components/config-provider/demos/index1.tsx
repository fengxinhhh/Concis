import React, { useState } from 'react';

import { Button, ConfigProvider } from '../../../index';

import '../../../global/index.less';

export default function ButtonDemo1() {
  const [theme, setTheme] = useState('light');

  const [size, setSize] = useState('middle');

  return (
    <>
      <p className="mobile-demo-title">基本使用</p>

      <ConfigProvider theme={theme} componentSize={size}>
        <Button type="primary" onClick={() => setTheme('light')}>
          浅色模式
        </Button>

        <Button type="primary" onClick={() => setTheme('dark')}>
          深色模式
        </Button>

        <Button type="primary" onClick={() => setTheme('auto')}>
          自动模式
        </Button>

        <br />

        <Button type="primary" onClick={() => setSize('large')}>
          大组件
        </Button>

        <Button type="primary" onClick={() => setSize('middle')}>
          中组件
        </Button>

        <Button type="primary" onClick={() => setSize('small')}>
          小组件
        </Button>
      </ConfigProvider>
    </>
  );
}
