---
title: Space 间距
nav:
  title: 组件
  path: /common
group:
  title: 布局
mobile: false
---

# Space 间距

设置组件之间的间距。

#### 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。

- 可以设置各种水平对齐方式。

## 基本使用

间距组件的基本用法。

<code src="./demos/index1.tsx" />

## 垂直间距

可以设置垂直方向排列的间距。

<code src="./demos/index2.tsx" />

## 尺寸

内置 4 个尺寸，mini - 4px small - 8px (默认) medium - 16px large - 24px，也支持传数字来自定义尺寸。

<code src="./demos/index3.tsx" />

## 对齐

内置 4 种对齐方式，分别为 start center end baseline，在水平模式下默认为 center。

<code src="./demos/index4.tsx" />

## 环绕间距

环绕类型的间距，四周都有间距，一般用于换行的场景，配置 size 为[12,18]分别表示水平、垂直间距。

<code src="./demos/index5.tsx" />

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | `--` |
| style | 自定义样式 | `CSSProperties` | `--` |
| direction | 方向 | `horizontal / vertical` | `horizontal` |
| size | 间距大小 | `mini / small / medium / large / number / Array<number>` | `small` |
| align | 垂直对齐方式 | `start / center / end / baseline` | `center` |
| wrap | 环绕间距 | `boolean` | `false` |
