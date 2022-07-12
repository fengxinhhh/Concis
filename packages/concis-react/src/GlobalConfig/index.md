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

## 基本用法

此处列出了 Concis 所有支持主题色自定义的组件，你可以在演示中切换主题色。

Input、Tree、Menu 三款组件可以单独配置其特定的背景/字体色，这为了更好的搭配主题色，因为它们其中的某些色彩偏离了主题色，具体可参照 API。

<code src="./demos/index1.tsx"/>

<API />
