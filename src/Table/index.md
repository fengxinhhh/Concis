---
title: Table 表格
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
---

# Table 表格

用于数据收集展示、分析整理、操作处理。

## 基本使用

基础表格 <code src="./demos/index1.tsx"/>

## 对齐方式与宽度

配置表头数据和 align 自定义宽度和对齐方式 <code src="./demos/index2.tsx"/>

## 展开行

配置 expandedRowRender 回调函数对展开行进行配置

<code src="./demos/index3.tsx" />

## 单选

配置 radio 以支持单选，radioSelectCallback 获取选择结果

<code src="./demos/index4.tsx" />

## 多选

配置 checked 以支持多选，checkedSelectCallback 获取选择结果

<code src="./demos/index5.tsx" />

## 排序

配置表头数组结构 sorter，默认排序设定值为 true 即可，自定义排序可设定为数组，0 下标位表示升序规则，1 下标位表示降序规则

<code src="./demos/index6.tsx" />

<API />
