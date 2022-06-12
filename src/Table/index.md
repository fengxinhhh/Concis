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

## 筛选

配置表头数组结构 filter，以及组件传参 filter，开启筛选

<code src="./demos/index11.tsx" />

### 以下虚拟列表滚动、懒加载、分页为大数据时的建议方案，无法同时使用，只能选择其一进行开发

## 虚拟列表滚动

largeDateShowNum 表示固定列展示的数据条数，默认 10 条，通过 virtualized 开启虚拟列表

<code src="./demos/index7.tsx" />

## 懒加载

largeDateShowNum 表示初始展示条数，默认 10 条，通过 lazyLoad 开启懒加载

<code src="./demos/index8.tsx" />

## 分页

通过 pagination 开启分页，通过 paginationAlign 改变分页对齐方式

<code src="./demos/index9.tsx" />

## 拖拽

通过 dropabled 开启拖拽

<code src="./demos/index10.tsx" />

<API />
