---
title: Zoombox 缩放盒子
nav:
  title: 组件
  path: /common
group:
  title: 其他
mobile: false
---

# Zoombox 缩放盒子

灵活可缩放的展示性容器。

## 基本使用

最基本的使用。

<code src="./demos/index1.tsx"></code>

## 在 Modal 中使用

`Zoombox` 支持在 `concis` 的任何容器类组件中配套使用，如 `Modal`。

<code src="./demos/index2.tsx"></code>

## 多盒子

多个 `Zoombox` 自适应。

<code src="./demos/index3.tsx"></code>

## 禁止选中

通过 `notAllowed` 防止在缩放时选中容器内文本。

<code src="./demos/index4.tsx"></code>

## 最小宽高限制

通过 `minWidth`、`minHeight` 限制最小宽高。

<code src="./demos/index5.tsx"></code>

## 无边框

配置 `noBorder` 设置无边框。

<code src="./demos/index6.tsx"></code>

## API

| Name          | Description      | Type                                                               | Default |
| ------------- | ---------------- | ------------------------------------------------------------------ | ------- |
| className     | 类名             | `string`                                                           | `--`    |
| style         | 自定义样式       | `CSSProperties`                                                    | `--`    |
| notAllowed    | 禁止选中文本     | `boolean`                                                          | `false` |
| noBorder      | 无边框           | `boolean`                                                          | `false` |
| minWidth      | 最小宽度         | `number`                                                           | `0`     |
| minHeight     | 最小高度         | `number`                                                           | `0`     |
| maxWidth      | 最大宽度         | `number`                                                           | `--`    |
| maxHeight     | 最大高度         | `number`                                                           | `--`    |
| onMoving      | 拖动中回调函数   | `(e: MouseEvent, size: { width: number; height: number }) => void` | `--`    |
| onMovingEnd   | 拖动结束回调函数 | `() => void`                                                       | `--`    |
| onMovingStart | 拖动开始回调函数 | `() => void`                                                       | `--`    |
