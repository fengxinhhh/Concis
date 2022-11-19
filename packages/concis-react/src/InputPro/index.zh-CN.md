---
title: InputPro 预选择输入框
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# InputPro 预选择输入框

在 Input 基础上提供预选择的输入框。

## 基本使用

基础预选择输入框组件。

<code src="./demos/index1.tsx"></code>

## 不同位置

配置`align`改变预选择出现位置，有`left`、`right`、`top`、`bottom`四个位置。

<code src="./demos/index2.tsx"></code>

## 单独禁用

配置`option`项中`disabled`属性，实现单项禁用。

<code src="./demos/index3.tsx"></code>

## API

| Name         | Description          | Type                          | Default |
| ------------ | -------------------- | ----------------------------- | ------- |
| className    | 自定义类名           | `string`                      | `--`    |
| style        | 自定义样式           | `CSSProperties`               | `--`    |
| option       | 列表配置项           | `optionParams[]`              | `[]`    |
| align        | 对齐方式             | `left / right / top / bottom` | `top`   |
| handleClick  | 选择后的回调函数     | `Function`                    | `--`    |
| handleChange | 文本框改变的回调函数 | `Function`                    | `--`    |
| handleClear  | 文本框清空的回调函数 | `Function`                    | `--`    |

## optionParams API

| Name     | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| label    | 标题        | `string`  | `--`    |
| disabled | 禁用        | `boolean` | `--`    |
