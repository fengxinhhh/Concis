---
title: Tabs 标签页
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Tabs 标签页

选项卡切换组件。

## 基本使用

最基础的选项卡。

<code src="./demos/index1.tsx"/>

## 禁用

禁用某一项标签页。

<code src="./demos/index6.tsx"/>

## 位置

配置`tabPosition`使用不同的布局，共有`left`、`right`、`top`、`bottom` 4 种方式，默认`top`。

<code src="./demos/index2.tsx"/>

## 不同类型

配置`type`使用不同的布局，共有`line`、`text`、`round`、`card` 4 种方式，默认`line`。

<code src="./demos/index3.tsx"/>

## 额外内容

通过`extra`设置右侧额外页签，仅支持水平排列。

<code src="./demos/index4.tsx"/>

## 动态增减页签

配置`editable`开启编辑模式，通过`onAddTab`获取监听新增事件、`onDeleteTab`获取删除事件，修改传参数据。

仅在`type`=`card`时生效。

<code src="./demos/index5.tsx" />

## 嵌套

组件支持嵌套使用。

<code src="./demos/index7.tsx" />

## 不同尺寸

配置`size`定制不同的尺寸，共有`mini`、`small`、`default`、`large` 4 种尺寸，默认`default`。

<code src="./demos/index8.tsx" />

## 滚动

导航栏撑开一定距离后自动开启滚动。

<code src="./demos/index9.tsx" />

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | 类名 | `string` | `--` |
| style | 自定义样式 | `CSSProperties` | `--` |
| defaultActiveTab | 默认选中的 key | `string` | `--` |
| tabPosition | 出现方位 | `top / bottom / left / right` | `top` |
| type | Tabs 类型 | `line / text / round / card` | `line` |
| size | Tabs 大小 | `mini / small / default / large` | `default` |
| extra | 导航栏右侧插槽 | `ReactNode` | `<></>` |
| editable | 可编辑模式 | `boolean` | `false` |
| onAddTab | 可编辑模式下添加回调函数 | `Function` | `无返回参数` |
| onDeleteTab | 可编辑模式下删除回调函数 | `Function` | `返回删除的key` |
| onChange | 切换 Tabs 回调函数 | `Function` | `返回切换后当前key` |

## TabPane

| Name  | Description | Type     | Default |
| ----- | ----------- | -------- | ------- |
| key   | 唯一标识    | `string` | `--`    |
| title | 标题        | `string` | `--`    |
