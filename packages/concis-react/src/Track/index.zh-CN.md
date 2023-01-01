---
title: Track 埋点
nav:
  title: 组件
  path: /common
group:
  title: 业务
mobile: false
toc: content
---

# Track 埋点

注入在页面上的埋点，用于统计页面的访问量、性能参数、网络请求、资源。

## 基本使用

`Track` 组件向外暴露 `callbackTrackData` 方法，在想要收集当前页面数据的地方调用即可。

通常会在收集后进行接口上报推送操作。

<code src="./demos/index1.tsx"></code>

你的项目中 `App` 组件看起来就像是这样：

```tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import A from './pages/A';
import B from './pages/B';
import { Track } from 'concis';

function App() {
  const trackRef = React.useRef();

  // 用在项目根目录，定时上报，如每隔一小时上报一次
  setInterval(() => {
    getTrackData();
  }, 60 * 60 * 1000);

  function getTrackData() {
    const res = trackRef.current.callbackTrackData();
    //接口上报...
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<A />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
      </Routes>
      <Track ref={trackRef} />
    </div>
  );
}
```

当然，基于 `Track` 组件本身的通用性，你也可以通过向下传递 `Track` 的 `ref` ，在任何你想要收集数据的地方调用 `callbackTrackData` 方法。

组件本身内置监听 `url` 变化，在业务中同步监听 `url` 变化，获取对应页面的数据即可。
