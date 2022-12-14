---
title: Rate 评分
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# Rate 评分

评分组件。

#### 何时使用

- 对评价进行展示。

- 对事物进行快速的评级操作。

## 基本使用

基础评分组件。

<code src="./demos/index1.tsx"></code>

## 自定义颜色

配置`starColor`属性自定义星星颜色。

<code src="./demos/index2.tsx"></code>

## 数量与默认显示

通过`num`、`defaultShow`自定义星星数量和默认显示数量。

<code src="./demos/index3.tsx"></code>

## 只读

配置`readonly`指定`Rate`为只读。

<code src="./demos/index4.tsx"></code>

## 可清除

指定`avaClear`允许双击清除评分。

<code src="./demos/index5.tsx"></code>

## 案例

评分业务案例。

<code src="./demos/index6.tsx"></code>

## API

| Name           | Description  | Type            | Default |
| -------------- | ------------ | --------------- | ------- |
| className      | 自定义类名   | `string`        | `--`    |
| style          | 自定义样式   | `CSSProperties` | `--`    |
| num            | 星星个数     | `number`        | `5`     |
| starColor      | 颜色         | `string`        | `--`    |
| defaultShow    | 默认显示个数 | `number`        | `all`   |
| avaClear       | 双击清除     | `boolean`       | `false` |
| readonly       | 只读         | `boolean`       | `false` |
| chooseCallback | 选择回调函数 | `Function`      | `--`    |
