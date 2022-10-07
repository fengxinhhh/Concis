---
title: Form 表单
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# Form 表单

- 具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
- 如需直接体验完整功能，可查看完整功能 demo，以下案例可参考代码，交互有偏差。

## 基本用法

最基础的表单。

<code src="./demos/index1.tsx"/>

## 布局方式

配置 layout 属性为 horizontal | vertical，改变布局方式。

<code src="./demos/index2.tsx"/>

## 受控表单与异步校验

让表单成为受控表单需要做两步：

1. useRef 创建一个 ref 并以 formField 参数传递给 Form;
2. 配置 Form.Item 中的 field 属性，使其成为受控项，field 属性名不可重复;

这样，你就可以通过 const form = Form.useForm(); 使用表单所提供的内部方法，获取表单的信息。在 onSubmit 方法触发时，会自动进行校验，但你也可以手动触发 validateFields 进行校验。

在 rules 中，你可以添加自定义方法{fn: () => , message: '自定义提示'}传递自定义校验规则。

<code src="./demos/index3.tsx"/>

## 表单重置

使用 Form.useForm().resetFields 方法重置表单中的受控项。

<code src="./demos/index4.tsx"/>

## 全局禁用

设置 disabled 属性，全局禁用。

<code src="./demos/index5.tsx"/>

## 单行禁用

设置 Form.Item 的 disabled 属性，单行禁用。

<code src="./demos/index7.tsx" />

## 注册表单

注册表单案例。

<code src="./demos/index8.tsx" />

## 弹窗反馈

通过 Message 组件进行提交反馈。

<code src="./demos/index9.tsx" />

## 获取表单上下文

使用 Form.useForm().useFormContext 获取表单受控参数。

<code src="./demos/index10.tsx" />

## 完整功能

<code src="./demos/index6.tsx"/>

<API />
