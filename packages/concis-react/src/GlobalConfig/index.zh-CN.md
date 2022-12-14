---
title: GlobalConfig 全局配置
nav:
  title: 组件
  path: /common
group:
  title: 其他
mobile: false
toc: content
---

# GlobalConfig 全局配置

为组件提供统一的全局化配置。

## 使用

GlobalConfig 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

```tsx pure
import { GlobalConfig } from 'concis';

// ...

export default () => (
  <GlobalConfig globalColor="orange">
    <App />
  </GlobalConfig>
);
```

## 自定义主题

此处列出了 Concis 所有支持主题色自定义的组件，你可以在演示中切换主题色。

<code src="./demos/index1.tsx"></code>

## 暗黑模式

通过 darkTheme 开启暗黑模式，为所有 Concis 添加暗黑样式。

在使用了暗黑模式的基础下，Concis 不建议同时使用自定义主题，虽然也做了兼容。

<code src="./demos/index2.tsx"></code>

我们推荐使用 Concis 自带的项目背景色和字体色，配置如下：

```css pure
@import 'concis/web-react/style/compiled-colors.less';
@import 'concis/web-react/style/index.css';

.App {
  color: @dark-theme-text-color;
  background: @dark-theme-background;
}
```

对于优先级，自定义主题色的优先级会高于暗黑主题的颜色，当然你可以通过全局 className，组件局部 className，来深度自定化一些自己所需要的业务样式。

## API

| Name        | Description      | Type      | Default   |
| ----------- | ---------------- | --------- | --------- |
| globalColor | 主题颜色         | `string`  | `#325DFF` |
| prefixCls   | 全局组件类名前缀 | `any`     | `concis`  |
| darkTheme   | 深色模式         | `boolean` | `false`   |
