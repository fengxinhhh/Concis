---
title: CheckBox 多选框
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
toc: content
---

# CheckBox 多选框

多选框组件

## 何时使用

- 在一组可选项中进行多项选择时。

## 基本使用

基本多选框。

<code src="./demos/index1.tsx"></code>

## 禁用

配置 `disabled` 禁用多选框。

<code src="./demos/index2.tsx"></code>

## 多选组

通过 `group` 参数，实现多选组。

<code src="./demos/index3.tsx"></code>

## 全选

一则案例。

<code src="./demos/index4.tsx"></code>

## API

| Name               | Description        | Type                | Default |
| ------------------ | ------------------ | ------------------- | ------- |
| style              | 自定义样式         | `CSSProperties`     | `--`    |
| className          | 类名               | `string`            | `--`    |
| checked            | 默认选中状态       | `boolean`           | `false` |
| disabled           | 禁用               | `boolean`           | `false` |
| group              | 多选组配置         | `Array<checkGroup>` | `[]`    |
| checkCallback      | 多选框选中回调函数 | `Function`          | `--`    |
| checkGroupCallback | 多选组改变回调函数 | `Function`          | `--`    |

## checkGroup API

| Name     | Description | Type              | Default |
| -------- | ----------- | ----------------- | ------- |
| label    | 显示标题    | `string`          | `--`    |
| value    | 选中值      | `string / number` | `--`    |
| checked  | 选中状态    | `boolean`         | `--`    |
| disabled | 禁用        | `boolean`         | `--`    |
