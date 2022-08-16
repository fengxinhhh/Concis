---
title: Modal 对话框
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
---

# Modal 对话框

在当前页面打开一个浮层，承载相关操作。

## 基本使用

最基本的对话框。

<code src="./demos/index1.tsx" />

## 异步关闭

支持 `onOk`、`onCancel` 采用 `Promise` 异步关闭对话框。

<code src="./demos/index2.tsx" />

## 函数式调用

通过 `Modal.confirm` 快速调用开启 Modal，同样支持异步关闭。

函数式调用与组件调用的区别是：前者将 Modal 显示状态交给组件托管，后者将 Modal 显示状态放在调用端托管。

<code src="./demos/index4.tsx" />

## 消息提示

有 `info`, `success`, `warning`, `error` 四种类型的消息提示。

<code src="./demos/index3.tsx" />

## 自定义页脚

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。如果 `okButtonProps` 、 `cancelButtonProps` 仍然不能满足需要的话，可以直接传入 `footer` 来自定义页脚内容。

`footer` 传入`<></>`则代表无页脚。

<code src="./demos/index5.tsx" />

## 自定义宽度

通过 `width` 配置对话框百分比宽度。

设置 string 代表 px 值，设置 number 代表百分比值。

<code src="./demos/index9.tsx" />

## 定制按钮文字

设置 `okText` 与 `cancelText` 以自定义按钮文字。

<code src="./demos/index6.tsx" />

## 延迟加载数据

对话框中显示 loading 效果。

<code src="./demos/index7.tsx" />

## 带有步骤条对话框

对话框中显示 Steps。

<code src="./demos/index8.tsx" />

<API />
