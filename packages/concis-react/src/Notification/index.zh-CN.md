---
title: Notification 通知提醒框
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
---

# Notification 通知提醒框

全局展示通知提醒，将信息及时有效的传达给用户。

## 基本使用

最简单的例子。

<code src="./demos/index1.tsx"/>

## 不同类型

全局提示有 6 种不同的类型，分别为：info, success, warning, error, normal, loading。

<code src="./demos/index2.tsx"/>

## 状态切换

通过 duration 属性，连续出现多个状态。

注意: 每一条 Message 消失前有 200ms 的动画，需计算具体时间以便于位置显示正确。

<code src="./demos/index3.tsx"/>

## 通知提醒位置

通过 position 属性，通知提醒框有 4 种不同的弹出位置，分别为：左上角, 右上角 (默认), 左下角, 右下角。

<code src="./demos/index4.tsx"/>

## 自定义操作按钮

通过 clearable 属性，可手动关闭，通过 showFooter 属性，打开底部栏，也可通过 footerBtnVal 改变按钮文字。

<code src="./demos/index5.tsx"/>

## 自定义样式

通过 style 属性，设置样式。

<code src="./demos/index6.tsx"/>

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | `--` |
| style | 自定义样式 | `CSSProperties` | `--` |
| title | 标题 | `string` | `--` |
| content | 正文 | `string` | `--` |
| type | 提醒框类型类型 | `info / success / warning / error / normal / loading` | `info` |
| duration | 显示时间 | `number` | `3000ms` |
| position | 显示位置 | `topLeft / topRight / bottomLeft / bottomRight` | `topRight` |
| clearable | 出现可清除按钮 | `boolean` | `false` |
| showFooter | 出现底部菜单 | `boolean` | `false` |
| footerBtnVal | 底部按钮名称 | `footerBtnVal` | `Cancel、OK` |
| doneCallback | 关闭/确认回调函数，根据返回参数判断事件触发类型 | `Function` | `{1 -> 确认 2 -> 取消 3 -> 关闭}` |
| dark | 暗黑模式 | `boolean` | `false` |

## footerBtnVal API

| Name  | Description  | Type     | Default |
| ----- | ------------ | -------- | ------- |
| enter | 确认按钮文字 | `string` | `--`    |
| exit  | 取消按钮文字 | `string` | `--`    |
