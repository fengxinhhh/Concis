---
title: Radio 单选框
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
toc: content
---

# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本使用

基础单选框。

<code src="./demos/index1.tsx"></code>

## 禁用

通过 `disabled` 禁用。

<code src="./demos/index2.tsx"></code>

## 扩展性

单选组，通过配置 `canAddOption` 开启扩展模式。

<code src="./demos/index3.tsx"></code>

## 盒子样式单选

通过 `boxStyle` 配置盒子模式单选框。

<code src="./demos/index4.tsx"></code>

## API

| Name      | Description | Type            | Default |
| --------- | ----------- | --------------- | ------- |
| className | 自定义类名  | `string`        | `--`    |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| disabled  | 禁用        | `boolean`       | `false` |

## RadioGroup API

| Name          | Description      | Type            | Default   |
| ------------- | ---------------- | --------------- | --------- |
| className     | 自定义类名       | `string`        | `--`      |
| style         | 自定义样式       | `CSSProperties` | `--`      |
| value         | 默认选中索引     | `number`        | `--`      |
| canAddOption  | 支持手动扩展     | `boolean`       | `false`   |
| addOptionText | 扩展按钮文案     | `number`        | `More...` |
| boxStyle      | 方形样式         | `boolean`       | `false`   |
| onChange      | 选项改变回调函数 | `Function`      | `--`      |
