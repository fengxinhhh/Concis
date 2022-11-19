---
title: Switch 开关
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；

- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 基本使用

最基本的使用。

<code src="./demos/index1.tsx"></code>

## 禁用状态

通过 `disabled` 开启禁用。

<code src="./demos/index2.tsx"></code>

## 不同大小

如果觉得默认比较大，通过 `small` 切换到小开关。

<code src="./demos/index3.tsx"></code>

## 文字和图标

`checkedChildren` 自定义选中内容， `unCheckedChildren` 自定义未选中内容。

<code src="./demos/index4.tsx"></code>

## 加载中

通过 `loading` 切换到加载开关。

<code src="./demos/index5.tsx"></code>

## API

| Name              | Description  | Type            | Default |
| ----------------- | ------------ | --------------- | ------- |
| className         | 自定义类名   | `string`        | `--`    |
| style             | 自定义样式   | `CSSProperties` | `--`    |
| disabled          | 禁用         | `boolean`       | `false` |
| small             | 小型按钮     | `boolean`       | `false` |
| defaultChecked    | 默认选中     | `boolean`       | `false` |
| checkedChildren   | 选中文字     | `ReactNode`     | `--`    |
| unCheckedChildren | 未选中文字   | `ReactNode`     | `--`    |
| loading           | 加载状态     | `boolean`       | `false` |
| handleChange      | 改变回调函数 | `Function`      | `--`    |
