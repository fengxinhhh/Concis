---
nav:
  title: 设计
  path: /guide
mobile: false
---

# 定制主题

Concis 设计规范和技术上支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求，支持全局主题颜色的配置。

<code src="../../packages/concis-react/src/GlobalConfig/demos/index1.tsx" />

## Concis 提供的色彩变量

Concis 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

你可以在<a href="http://react-view-ui.com:92/#/guide/xcolor">色彩</a>中了解 Concis 内置 less 变量的使用和配置方法。

如果你有建议的内置 less 变量（不限于色彩变量），可以在<a href="https://github.com/fengxinhhh/Concis">https://github.com/fengxinhhh/Concis</a>提出 issue。

## 定制方式

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

你可以在安装、引入 Concis 的基础上对 React 中的根组件进行包裹，更多的主题定制 API 可在<a href="http://react-view-ui.com:92/#/common/global-config">GlobalConfig 组件</a>中了解。
