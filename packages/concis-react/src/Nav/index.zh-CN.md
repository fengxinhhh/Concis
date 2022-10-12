---
title: Nav 顶栏导航
nav:
  title: 组件
  path: /common
group:
  title: 导航
mobile: false
---

# Nav 顶栏导航

常用于网站顶部导航栏。

## 基本使用

最基本的导航栏。

<code src="./demos/index1.tsx" />

## 悬浮消息框

配置 `navContent` 参数，即可在悬浮对应菜单时弹出对应内容， `navContent` 的数组长度应该与 `navData` 对应。

<code src="./demos/index2.tsx" />

## 左右插槽

提供 `leftSlot`、`rightSlot`，可在导航左右自定义内容。

<code src="./demos/index3.tsx" />

<API />

## navData API

| Name  | Description | Type   | Default |
| ----- | ----------- | ------ | ------- |
| link  | 跳转链接    | string | `--`    |
| label | 菜单标签名  | string | `--`    |
