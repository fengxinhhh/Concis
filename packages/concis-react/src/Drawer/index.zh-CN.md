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

<code src="./demos/index1.tsx" />

## 不同方向

配置`align`改变抽屉出现位置，可选`left`、`right`、`top`、`bottom`，默认为`right`。

<code src="./demos/index2.tsx" />

## 异步关闭

支持`onCancel`、`onOk`为 Promise 写法，异步控制抽屉显示状态。

<code src="./demos/index3.tsx" />

## 自定义页脚

传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 `props`。如果 `okButtonProps` 、 `cancelButtonProps` 仍然不能满足需要的话，可以直接传入 `footer` 来自定义页脚内容。

`footer` 传入`<></>`则代表无页脚。

<code src="./demos/index4.tsx" />

## 自定义宽度

通过 `width` 配置对话框百分比宽度。

设置 `string` 代表 px 值，设置 `number` 代表百分比值。

<code src="./demos/index5.tsx" />

## 抽屉表单

一个`Form` + `Drawer`的实例。

<code src="./demos/index6.tsx" />

<API />
