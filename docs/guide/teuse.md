---
nav:
  title: 指南
  path: /guide
---

# 快速开始

Concis 致力于提供给程序员愉悦的开发体验。

<Alert>在开始之前，推荐先学习 React 和 ES2015，并正确安装和配置了 Node.js v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 全家桶的正确开发方式。如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。</Alert>

# 第一个例子

这是一个最简单的 Concis 组件的在线 codesandbox 演示。

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from '../site/Section';
import '../site/styles.less';

export default () => (
  <Section titleStyle={{ paddingBottom: 100, fontWeight: 'bold' }}>
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/s/concis-up772x?file=/src/App.js"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
```

# 探索更多组件用法

你可以在组件页面的左侧菜单查看组件列表，比如 <a href="http://concis.org.cn/#/common/button">Button</a> 组件，组件文档中提供了各类演示，最下方有组件 API 文档可以查阅。在代码演示部分找到第一个例子，点击右下角的图标展开代码。

然后依照演示代码的写法，在之前的 codesandbox 里修改 index.js，首先在 import 内引入其他组件：
