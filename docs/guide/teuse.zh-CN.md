---
order: 1
title: 快速开始
---

# 快速开始

Concis 致力于提供给程序员愉悦的开发体验。

:::warning{title=注意}
在开始之前，推荐先学习 React 和 ES2015，并正确安装和配置了 Node.js v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 全家桶的正确开发方式。如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。
:::

## 第一个例子

这是一个最简单的 Concis 组件的在线 codesandbox 演示。

```tsx | demo
/**
 * inline: true
 */
import React from 'react';

import { Section } from './site/Section';

import './site/styles.less';

export default () => (
  <Section titleStyle={{ paddingBottom: 100, fontWeight: `bold` }}>
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/s/concis-up772x?file=/src/App.js"
      allow="accelerometer; ambient- light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow- forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
```

## 探索更多组件用法

你可以在组件页面的左侧菜单查看组件列表，比如 <a href="https://concis.org.cn/#/zh-CN/common/button">Button</a> 组件，组件文档中提供了各类演示，最下方有组件 API 文档可以查阅。在代码演示部分找到第一个例子，点击右下角的图标展开代码。

然后依照演示代码的写法，在之前的 codesandbox 里修改 index.js，首先在 import 内引入其他组件。

## 多模块支持

Concis 在打包产物中提供了`ejs`、`cjs`、`umd` 三种模块化文件，默认为 `umd` 模块文件，如果想使用其他模块的组件可以通过如下:

使用 cjs 模块:

```tsx
import React from 'react';
import { Button } from 'concis/web-react/cjs';
```

使用 ejs 模块:

```tsx
import React from 'react';
import { Button } from 'concis/web-react/es';
```

## 内置类型提示

Concis 采用 `TypeScript` 编写，并将每个组件的类型向外暴露，在编写 Concis 组件的过程中，你可以通过悬浮组件标签上获得提示，就像这样:

<img src="https://concis.org.cn/images/ts-alias.jpg" />
