---
title: Link 链接
nav:
  title: 组件
  path: /common
group:
  title: 通用
mobile: false
toc: content
---

# Link 链接

与按钮相比，链接不太突出，因此通常将其用作可选操作。

## 基本使用

基础链接。

<code src="./demos/index1.tsx"></code>

## 其他状态

提供 `primary`、`error`、`warning`、`success` 四种状态，默认`primary`。

<code src="./demos/index2.tsx"></code>

## 图标链接

配置 `icon` 属性展示图标，为 `true` 显示默认图标，也可以自定义图标。

<code src="./demos/index3.tsx"></code>

## API

| Name      | Description | Type                                  | Default   |
| --------- | ----------- | ------------------------------------- | --------- |
| className | 自定义类名  | `string`                              | `--`      |
| style     | 自定义样式  | `CSSProperties`                       | `--`      |
| href      | 跳转链接    | `string`                              | `--`      |
| status    | 状态        | `primary / error / success / warning` | `primary` |
| disabled  | 禁用状态    | `boolean`                             | `false`   |
| icon      | 图标状态    | `boolean / ReactNode`                 | `false`   |
