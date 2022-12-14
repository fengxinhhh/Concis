---
title: Tag 标签
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
toc: content
---

# Tag 标签

用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。

## 基本使用

最基础的标签。

<code src="./demos/index1.tsx"></code>

## 字体颜色

通过 `color` 自定义标签字色。

<code src="./demos/index2.tsx"></code>

## 背景颜色

通过 `tagBackground` 自定义标签背景色。

<code src="./demos/index3.tsx"></code>

## 可选中

通过 `checkable` 开启标签选中模式，`defaultChecked` 用于默认选中状态。默认 `true`。

<code src="./demos/index4.tsx"></code>

## 可关闭

通过 `closeable` 配置可关闭标签，通过 `closeCallback` 获取关闭回调。

<code src="./demos/index5.tsx"></code>

## 动态编辑标签

一个实际业务案例，结合 `Input` 的使用。

<code src="./demos/index6.tsx"></code>

## 不同尺寸

通过 `size` 配置不同尺寸的标签，默认为 `default`。

<code src="./demos/index7.tsx"></code>

## API

| Name           | Description  | Type                               | Default   |
| -------------- | ------------ | ---------------------------------- | --------- |
| className      | 类名         | `string`                           | `--`      |
| style          | 自定义样式   | `CSSProperties`                    | `--`      |
| color          | 标签字体颜色 | `string`                           | `--`      |
| size           | 标签尺寸     | `large / medium / default / small` | `default` |
| tagBackground  | 标签背景颜色 | `string`                           | `--`      |
| checkable      | 是否可选中   | `boolean`                          | `false`   |
| closeable      | 是否可关闭   | `boolean`                          | `false`   |
| defaultChecked | 默认选中     | `boolean`                          | `true`    |
| clickCallback  | 点击回调事件 | `Function`                         | `--`      |
| checkCallback  | 选择回调事件 | `Function`                         | `--`      |
| closeCallback  | 关闭回调事件 | `Function`                         | `--`      |
