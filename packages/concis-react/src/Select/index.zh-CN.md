---
title: Select 下拉菜单
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# Select 下拉菜单

下拉选择器。

#### 何时使用

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。

## 基本使用

基础下拉框组件。

<code src="./demos/index1.tsx"></code>

## 禁用

通过 `disabled` 禁用。

<code src="./demos/index2.tsx"></code>

## 加载

通过 `loading` 禁用。

<code src="./demos/index3.tsx"></code>

## 下拉项单独禁用

配置 `option` 单项 `disabled` 进行单项禁用。

<code src="./demos/index4.tsx"></code>

## 可输入

配置 `showSearch` 开启可输入状态。

<code src="./demos/index5.tsx"></code>

## 按钮风格

配置 `type` 切换到按钮式选择器，可选 `primary`、`error`、`warning`、`success` 四种。

<code src="./demos/index6.tsx"></code>

## API

| Name                 | Description      | Type                                  | Default |
| -------------------- | ---------------- | ------------------------------------- | ------- |
| className            | 自定义类名       | `string`                              | `--`    |
| style                | 自定义样式       | `CSSProperties`                       | `--`    |
| option               | 选择器数据       | `Array<Options>`                      | `[]`    |
| width                | 宽度             | `number`                              | `80px`  |
| placeholder          | 提示             | `string`                              | `--`    |
| type                 | 按钮式风格       | `primary / error / warning / success` | `--`    |
| disabled             | 禁用状态         | `boolean`                             | `false` |
| loading              | 加载状态         | `boolean`                             | `false` |
| showSearch           | 可输入状态       | `boolean`                             | `false` |
| clearable            | 可输入状态下清除 | `boolean`                             | `false` |
| handleSelectCallback | 选择后的回调     | `Function`                            | `--`    |
| handleTextChange     | 输入后的回调     | `Function`                            | `--`    |

## Options API

| Name     | Description | Type              | Default |
| -------- | ----------- | ----------------- | ------- |
| label    | 展示标签    | `string / number` | `--`    |
| value    | 选中值      | `string / number` | `--`    |
| disabled | 禁用        | `boolean`         | `--`    |
