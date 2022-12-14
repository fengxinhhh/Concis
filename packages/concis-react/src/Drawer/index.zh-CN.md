---
title: Drawer 抽屉
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
---

# Drawer 抽屉

触发命令后，从屏幕一侧滑出的抽屉式的面板。

## 基本使用

基础抽屉，点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。

<code src="./demos/index1.tsx"></code>

## 不同方向

配置`align`改变抽屉出现位置，可选`left`、`right`、`top`、`bottom`，默认为`right`。

<code src="./demos/index2.tsx"></code>

## 异步关闭

支持`onCancel`、`onOk`为 Promise 写法，异步控制抽屉显示状态。

<code src="./demos/index3.tsx"></code>

## 自定义页脚

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 `props`。如果 `okButtonProps` 、 `cancelButtonProps` 仍然不能满足需要的话，可以直接传入 `footer` 来自定义页脚内容。

`footer` 传入`<></>`则代表无页脚。

<code src="./demos/index4.tsx"></code>

## 自定义宽度

通过 `width` 配置对话框百分比宽度。

设置 `string` 代表 px 值，设置 `number` 代表百分比值。

<code src="./demos/index5.tsx"></code>

## 抽屉表单

一个`Form` + `Drawer`的实例。

<code src="./demos/index6.tsx"></code>

## API

| Name              | Description      | Type                          | Default          |
| ----------------- | ---------------- | ----------------------------- | ---------------- |
| style             | 自定义样式       | `CSSProperties`               | `--`             |
| className         | 类名             | `string`                      | `--`             |
| title             | 标题             | `string / ReactNode`          | `--`             |
| visible           | 显示状态         | `boolean`                     | `false`          |
| align             | 出现位置         | `left / right / top / bottom` | `right`          |
| okButtonProps     | 确认按钮 props   | `参考Button组件api`           | `--`             |
| cancelButtonProps | 取消按钮 props   | `参考Button组件api`           | `--`             |
| footer            | 自定义页脚       | `ReactNode`                   | `确定、取消按钮` |
| okText            | 确认按钮文字     | `string`                      | `确定`           |
| cancelText        | 取消按钮文字     | `string`                      | `取消`           |
| width             | 对话框宽度百分比 | `string / number`             | `520px`          |
| onOk              | 确认回调函数     | `Function`                    | `--`             |
| onCancel          | 取消关闭回调函数 | `Function`                    | `--`             |
