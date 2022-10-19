---
title: Steps 步骤条
nav:
  title: 组件
  path: /common
group:
  title: 导航
mobile: false
---

# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 基本使用

基础步骤条组件。

<code src="./demos/index1.tsx"/>

## 额外参数

通过 `subTitle` 配置步骤子标题、 `description` 配置步骤描述。

<code src="./demos/index2.tsx"/>

## 遍历使用

遍历组件。

<code src="./demos/index3.tsx" />

## 可点击

点击切换步骤，通过 `onChange` 获取点击的 `current`。

<code src="./demos/index4.tsx"/>

## Steps API

| Name      | Description            | Type            | Default |
| --------- | ---------------------- | --------------- | ------- |
| className | 自定义类名             | `string`        | `--`    |
| style     | 自定义样式             | `CSSProperties` | `--`    |
| current   | 当前步骤下标           | `number`        | `1`     |
| onChange  | 点击步骤条改变回调函数 | `Function`      | `--`    |

## Step API

| Name        | Description | Type            | Default |
| ----------- | ----------- | --------------- | ------- |
| className   | 自定义类名  | `string`        | `--`    |
| style       | 自定义样式  | `CSSProperties` | `--`    |
| title       | 步骤标题    | `string`        | `--`    |
| subTitle    | 步骤子标题  | `string`        | `--`    |
| description | 步骤描述    | `string`        | `--`    |
