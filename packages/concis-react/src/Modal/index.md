---
title: Modal 对话框
nav:
  title: 组件
  path: /common
group:
  title: 反馈
---

# Modal 对话框

在当前页面打开一个浮层，承载相关操作。

## 基本使用

最基本的对话框。

<code src="./demos/index1.tsx" />

## 异步关闭

支持 onOk、onCancel 采用 Promise 异步关闭对话框。

<code src="./demos/index2.tsx" />

## 函数式调用

通过 Modal.confirm 快速调用开启 Modal，同样支持异步关闭。

<code src="./demos/index4.tsx" />

## 消息提示

有 info, success, warning, error 四种类型的消息提示。

<code src="./demos/index3.tsx" />

<API />
