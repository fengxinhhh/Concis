---
title: Skeleton 骨架屏
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
---

# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

#### 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。

- 图文信息内容较多的列表/卡片中。

- 只在第一次加载数据的时候使用。

- 可以被 Loading 完全代替，但是在可用的场景下可以比 Loading 提供更好的视觉效果和用户体验。

## 基本使用

最基本的骨架屏。

<code src="./demos/index1.tsx" />

## 显示标题

配置 `title`，显示标题骨架。

<code src="./demos/index2.tsx" />

## 显示头像

配置 `avatar`，显示标题骨架。

<code src="./demos/index3.tsx" />

## 自定义数量和宽度

通过 `row` 配置展示列数，通过 `width` 配置每列宽度。

<code src="./demos/index4.tsx" />

## 完整功能

完整功能展示。

<code src="./demos/index5.tsx" />

## API

| Name      | Description | Type                     | Default |
| --------- | ----------- | ------------------------ | ------- |
| className | 自定义类名  | `string`                 | `--`    |
| style     | 自定义样式  | `CSSProperties`          | `--`    |
| loading   | 加载状态    | `boolean`                | `true`  |
| title     | 显示标题    | `boolean`                | `false` |
| avatar    | 显示头像    | `boolean`                | `false` |
| row       | 自定义行数  | `number`                 | `3`     |
| width     | 自定义宽度  | `Array<string / number>` | `100%`  |
| size      | 头像尺寸    | `number`                 | `40`    |
