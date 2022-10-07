---
title: Tag 标签
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Tag 标签

用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。

## 基本使用

最基础的标签。

<code src="./demos/index1.tsx"/>

## 字体颜色

通过 `color` 自定义标签字色。

<code src="./demos/index2.tsx"/>

## 背景颜色

通过 `tagBackground` 自定义标签背景色。

<code src="./demos/index3.tsx"/>

## 可选中

通过 `checkable` 开启标签选中模式，`defaultChecked` 用于默认选中状态。默认 `true`。

<code src="./demos/index4.tsx" />

## 可关闭

通过 `closeable` 配置可关闭标签，通过 `closeCallback` 获取关闭回调。

<code src="./demos/index5.tsx" />

## 动态编辑标签

一个实际业务案例，结合 `Input` 的使用。

<code src="./demos/index6.tsx" />

## 不同尺寸

通过 `size` 配置不同尺寸的标签，默认为 `default`。

<code src="./demos/index7.tsx" />

<API />
