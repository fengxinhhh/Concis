---
order: 2
title: 暗黑模式
---

# 暗黑模式

## 介绍

Concis 内置提供了暗黑模式的主题，暗黑模式的优势在于在弱光环境下具有更高的可读性。

<code src="../../packages/concis-react/src/GlobalConfig/demos/index2.tsx" />

## 案例

基于 Concis 全家桶默认主题和暗黑主题的素材。

<img src="https://concis.org.cn/images/examplepic.jpeg" />

<img src="https://concis.org.cn/images/example-darkpic.jpeg" />

## 使用

通过 `GlobalConfig` 组件，配置 `darkTheme` 属性即可生效。

```tsx pure
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalConfig } from 'concis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalConfig darkTheme>
      <App />
    </GlobalConfig>
  </React.StrictMode>
);
```

## 注入推荐样式

推荐组件库推荐的项目背景色和字体颜色来更好的适配 Concis 暗黑模式。

```css pure
@import 'concis/web-react/style/compiled-colors.less';
@import 'concis/web-react/style/index.css';

.App {
  color: @dark-theme-text-color;
  background: @dark-theme-background;
}
```

更多全局配置可至<a href="https://concis.org.cn/#/zh-CN/common/global-config">GlobalConfig</a>查看。
