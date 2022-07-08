---
title: Form 表单
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
---

# Form 表单

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 基本用法

<code src="./demos/index1.tsx"/>

## 布局方式

<code src="./demos/index2.tsx"/>

## 受控表单与异步校验

在 onSubmit 方法触发时，会自动进行校验，但你也可以手动触发 validateFields 进行校验。

<code src="./demos/index3.tsx"/>

## 表单重置

使用 resetFields 方法重置表单中的受控项。

<code src="./demos/index4.tsx"/>

## 全局禁用

设置 disabled 属性，全局禁用。

<code src="./demos/index5.tsx"/>

## 单行禁用

<code src="./demos/index7.tsx" />

## 注册表单

<code src="./demos/index8.tsx" />

## 弹窗反馈

<code src="./demos/index9.tsx" />

## 获取表单上下文

<code src="./demos/index10.tsx" />

## 自定义校验

在 rules 中，你可以添加自定义方法{fn: () => , message: '自定义提示'}传递自定义校验规则。

<code src="./demos/index6.tsx"/>

<API />
