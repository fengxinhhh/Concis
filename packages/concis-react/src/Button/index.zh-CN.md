---
title: Button 按钮
nav:
  title: 组件
  path: /common
group:
  title: 通用
mobile: false
---

# Button 按钮

按钮用于开始一个即时操作。

## 基本使用

最基础的按钮，共有五种状态。

<code src="./demos/index1.tsx"></code>

## 长按钮

自定义宽高配置不同尺寸按钮。

<code src="./demos/index2.tsx"></code>

## 字体按钮

配置 circle 变成圆按钮。

<code src="./demos/index3.tsx"></code>

## 禁用按钮

配置 disabled 禁用按钮。

<code src="./demos/index4.tsx"></code>

## 虚线按钮

dashed 配置虚线按钮。

<code src="./demos/index5.tsx"></code>

## 加载状态

loading 配置加载状态按钮。

<code src="./demos/index6.tsx"></code>

## 图标按钮

通过 icon 属性，定制图标按钮。

<code src="./demos/index8.tsx"></code>

## 按钮组

通过 Button.Group 放入多个按钮组。

<code src="./demos/index7.tsx"></code>

## API

| Name        | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| style       | 自定义样式       | `CSSProperties`                            | `--`      |
| className   | 类名             | `string`                                   | `--`      |
| type        | 按钮主题         | `primary / danger / warning / info / text` | `primary` |
| width       | 宽度             | `number`                                   | `--`      |
| height      | 高度             | `number`                                   | `40px`    |
| disabled    | 禁用状态         | `boolean`                                  | `false`   |
| circle      | 字体按钮         | `boolean`                                  | `false`   |
| dashed      | 按钮边框为虚线   | `boolean`                                  | `false`   |
| loading     | 加载状态         | `boolean`                                  | `false`   |
| icon        | 图标按钮         | `ReactNode`                                | `<></>`   |
| handleClick | 按钮点击回调事件 | `Function`                                 | `--`      |

## Button Group API

| Name      | Description | Type            | Default |
| --------- | ----------- | --------------- | ------- |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| className | 类名        | `string`        | `--`    |
