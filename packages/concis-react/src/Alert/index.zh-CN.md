---
title: Alert 警告提示
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
---

# Alert 警告提示

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 基本使用

警告提示，展现需要关注的信息，适用于简短的警告提示。

<code src="./demos/index1.tsx"></code>

## 不同类型

警告提示的类型有 `info`, `success`, `warning`, `error` 四种。

<code src="./demos/index2.tsx"></code>

## 可关闭

通过 `showClear` ，显示关闭按钮，通过 `onClose` 获取关闭回调。

<code src="./demos/index3.tsx"></code>

## 自定义关闭元素

通过 `closeElement` ，自定义关闭按钮。

<code src="./demos/index4.tsx"></code>

## 标题

通过 `title` ，配置标题。

<code src="./demos/index5.tsx"></code>

## 无图标

通过 `showIcon = false` ，不显示图标。

<code src="./demos/index6.tsx"></code>

## API

| Name         | Description      | Type                               | Default |
| ------------ | ---------------- | ---------------------------------- | ------- |
| style        | 自定义样式       | `CSSProperties`                    | `--`    |
| className    | 类名             | `string`                           | `--`    |
| type         | 类型             | `info / success / warning / error` | `info`  |
| title        | 显示标题         | `string`                           | `''`    |
| content      | 警告文字         | `string`                           | `''`    |
| showClear    | 显示清除按钮     | `boolean`                          | `false` |
| showIcon     | 显示警告提示图标 | `boolean`                          | `true`  |
| closeElement | 自定义关闭图标   | `React.ReactNode / string`         | `--`    |
| onClose      | 关闭回调函数     | `Function`                         | `--`    |
