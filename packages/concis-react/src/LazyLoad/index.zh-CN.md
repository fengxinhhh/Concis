---
title: LazyLoad 懒加载
nav:
  title: 组件
  path: /common
group:
  title: 通用
mobile: false
---

# LazyLoad 懒加载

对一些内容进行显示监测，出现时进行静态加载。

## 何时使用

常用于长列表 SPA 首屏下，对中下部分元素进行懒加载，实现页面加载优化。

## 基本使用

对于想进行懒加载的元素，直接包裹在 `LazyLoad` 组件中即可，当元素出现在视窗区域，则会自动加载，对于性能提升有极大帮助。

<code src="./demos/index1.tsx"></code>

## API

| Name      | Description | Type            | Default |
| --------- | ----------- | --------------- | ------- |
| className | 自定义类名  | `string`        | `--`    |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| delay     | 延迟加载    | `number`        | `0ms`   |
