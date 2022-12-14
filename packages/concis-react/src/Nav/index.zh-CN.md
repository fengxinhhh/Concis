---
title: Nav 顶栏导航
nav:
  title: 组件
  path: /common
group:
  title: 导航
mobile: false
toc: content
---

# Nav 顶栏导航

常用于网站顶部导航栏。

## 基本使用

最基本的导航栏。

<code src="./demos/index1.tsx"></code>

## 悬浮消息框

配置 `navContent` 参数，即可在悬浮对应菜单时弹出对应内容， `navContent` 的数组长度应该与 `navData` 对应。

<code src="./demos/index2.tsx"></code>

## 左右插槽

提供 `leftSlot`、`rightSlot`，可在导航左右自定义内容。

<code src="./demos/index3.tsx"></code>

## API

| Name       | Description            | Type              | Default |
| ---------- | ---------------------- | ----------------- | ------- |
| className  | 自定义类名             | `string`          | `--`    |
| style      | 自定义样式             | `CSSProperties`   | `--`    |
| navData    | 导航栏标签配置项       | `navDataOption[]` | `[]`    |
| navContent | 导航栏标题显示窗配置项 | `ReactNode[]`     | `[]`    |
| leftSlot   | 左侧插槽               | `ReactNode`       | `--`    |
| rightSlot  | 右侧插槽               | `ReactNode`       | `--`    |

## navData API

| Name  | Description | Type     | Default |
| ----- | ----------- | -------- | ------- |
| link  | 跳转链接    | `string` | `--`    |
| label | 菜单标签名  | `string` | `--`    |
