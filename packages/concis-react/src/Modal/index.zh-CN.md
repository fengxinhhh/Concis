---
title: Modal 对话框
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
toc: content
---

# Modal 对话框

在当前页面打开一个浮层，承载相关操作。

## 基本使用

最基本的对话框。

<code src="./demos/index1.tsx"></code>

## 异步关闭

支持 `onOk`、`onCancel` 采用 `Promise` 异步关闭对话框。

<code src="./demos/index2.tsx"></code>

## 函数式调用

通过 `Modal.confirm` 快速调用开启 Modal，同样支持异步关闭。

函数式调用与组件调用的区别是：前者将 Modal 显示状态交给组件托管，后者将 Modal 显示状态放在调用端托管。

<code src="./demos/index4.tsx"></code>

## 消息提示

有 `info`, `success`, `warning`, `error` 四种类型的消息提示。

<code src="./demos/index3.tsx"></code>

## 自定义页脚

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。如果 `okButtonProps` 、 `cancelButtonProps` 仍然不能满足需要的话，可以直接传入 `footer` 来自定义页脚内容。

`footer` 传入`<></>`则代表无页脚。

<code src="./demos/index5.tsx"></code>

## 自定义宽度

通过 `width` 配置对话框百分比宽度。

设置 string 代表 px 值，设置 number 代表百分比值。

<code src="./demos/index9.tsx"></code>

## 定制按钮文字

设置 `okText` 与 `cancelText` 以自定义按钮文字。

<code src="./demos/index6.tsx"></code>

## 延迟加载数据

对话框中显示 loading 效果。

<code src="./demos/index7.tsx"></code>

## 带有步骤条对话框

对话框中显示 Steps。

<code src="./demos/index8.tsx"></code>

## API

| Name               | Description            | Type                  | Default          |
| ------------------ | ---------------------- | --------------------- | ---------------- |
| className          | 自定义类名             | `string`              | `--`             |
| style              | 自定义样式             | `CSSProperties`       | `--`             |
| title              | 标题                   | `string 、 ReactNode` | `--`             |
| visible            | 显示状态               | `boolean`             | `false`          |
| okButtonProps      | 确认按钮 props         | `Button组件props`     | `--`             |
| cancelButtonProps  | 取消按钮 props         | `Button组件props`     | `--`             |
| footer             | 自定义页脚             | `ReactNode`           | `确定、取消按钮` |
| okText             | 确认按钮文字           | `string`              | `确定`           |
| cancelText         | 取消按钮文字           | `string`              | `取消`           |
| cancelOnlyByButton | 只能通过按钮关闭 Modal | `boolean`             | `false`          |
| width              | 对话框宽度百分比       | `number / string`     | `520px`          |
| onOk               | 确认回调函数           | `Function`            | `--`             |
| onCancel           | 取消关闭回调函数       | `Function`            | `--`             |
| content            | 调用式函数 Modal 内容  | `ReactNode`           | `--`             |
