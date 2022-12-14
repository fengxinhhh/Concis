---
title: Loading 加载中
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
toc: content
---

# Loading 加载中

用于页面和区块的加载中状态 - 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 基本使用

一个简单的 loading 状态。

<code src="./demos/index1.tsx"></code>

## 省略号加载

配置 type=dot，可以展示省略号显示。

<code src="./demos/index2.tsx"></code>

## 列表式加载

配置 type=strip，可以展示列表式显示。

<code src="./demos/index7.tsx"></code>

## 蒙层

配置 mask 属性，对展示内容进行蒙层显示，适用于容器内加载。

注意：需对外层容器设置 position: relative 使得加载 Icon 在中心点。

<code src="./demos/index3.tsx"></code>

## 加载文字

配置 loadingText，设置加载文字。

<code src="./demos/index4.tsx"></code>

## 不同大小

通过 width、height，自定义大小。

<code src="./demos/index5.tsx"></code>

## 自定义图标

通过 icon 属性，设置自定义图标，自定义图标大小不支持 width、height 属性。

<code src="./demos/index6.tsx"></code>

## API

| Name        | Description    | Type                    | Default   |
| ----------- | -------------- | ----------------------- | --------- |
| className   | 自定义类名     | `string`                | `--`      |
| style       | 自定义样式     | `CSSProperties`         | `--`      |
| type        | 加载 Icon 类型 | `default / dot / strip` | `default` |
| mask        | 配置蒙层       | `boolean`               | `false`   |
| loadingText | 加载文字       | `string`                | `--`      |
| icon        | 自定义图标     | `ReactNode`             | `--`      |
| width       | 自定义宽度     | `string`                | `2em`     |
| height      | 自定义高度     | `string`                | `2em`     |
