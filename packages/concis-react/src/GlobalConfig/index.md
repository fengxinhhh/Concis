---
title: GlobalConfig 全局配置
nav:
  title: 组件
  path: /common
group:
  title: 其他
---

# GlobalConfig 全局配置

为组件提供统一的全局化配置。

## 使用

GlobalConfig 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

```tsx pure
import { GlobalConfig } from 'concis/web-react';

// ...

export default () => (
  <GlobalConfig globalColor="orange">
    <App />
  </GlobalConfig>
);
```

## 自定义主题

此处列出了 Concis 所有支持主题色自定义的组件，你可以在演示中切换主题色。

<code src="./demos/index1.tsx"/>

## 暗黑模式

通过 darkTheme 开启暗黑模式，为所有 Concis 添加暗黑样式。

在使用了暗黑模式的基础下，Concis 不建议同时使用自定义主题，虽然也做了兼容。

<code src="./demos/index2.tsx"/>

<API />
