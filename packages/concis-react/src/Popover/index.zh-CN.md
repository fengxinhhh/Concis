---
title: Popover 气泡卡片
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 基本使用

基础气泡卡片。

<code src="./demos/index1.tsx"></code>

## 点击式

配置 `type = click`，切换为点击式触发。

<code src="./demos/index2.tsx"></code>

## 不同方向

通过 `align`，切换不同出现方向，可选 `left`、`right`、`top`、`bottom`。

<code src="./demos/index3.tsx"></code>

## 浮层内关闭

通过 `useRef` 声明一个独立的 `ref` 并传给 `Popover`，调用 `ref.current.setShowDialog`，可切换显示状态。

<code src="./demos/index4.tsx"></code>

## API

| Name            | Description                    | Type              | Default  |
| --------------- | ------------------------------ | ----------------- | -------- |
| className       | 自定义类名                     | `string`          | `--`     |
| style           | 自定义样式                     | `CSSProperties`   | `--`     |
| type            | 触发形式 hover/click           | `string`          | `hover`  |
| align           | 对齐方式 left/right/top/bottom | `string`          | `bottom` |
| content         | 卡片内容                       | `ReactNode`       | `<></>`  |
| dialogWidth     | 卡片宽度                       | `number / string` | `200px`  |
| noBorder        | 无边框                         | `boolean`         | `false`  |
| defaultShow     | 默认显示气泡卡片               | `boolean`         | `false`  |
| closeDeps       | 气泡卡片关闭依赖项             | `any[]`           | `[]`     |
| onVisibleChange | 卡片显示隐藏回调               | `Function`        | `--`     |
