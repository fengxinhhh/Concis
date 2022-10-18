---
title: Notification
nav:
  title: Component
  path: /common
group:
  title: Feedback
mobile: false
---

# Notification

The notice reminder is displayed globally to convey the information to users in a timely and effective manner.

## Basic use

The simplest example.

<code src="./demos/index1.tsx"/>

## Different types

There are six different types of global prompts: info, success, warning, error, normal, and loading.

<code src="./demos/index2.tsx"/>

## State switching

Multiple states appear continuously through the duration attribute.

Note: There is 200ms animation before each message disappears, and the specific time needs to be calculated so that the position display is correct.

<code src="./demos/index3.tsx"/>

## Notification Reminder Location

Through the position attribute, the notification reminder box has four different pop- up positions: upper left corner, upper right corner (default), lower left corner, and lower right corner.

<code src="./demos/index4.tsx"/>

## Custom Action Button

Through the clearable attribute, you can manually close it, through the showFooter attribute, open the bottom column, or change the button text through the footerBtnVal.

<code src="./demos/index5.tsx"/>

## Custom Styles

Set the style through the style attribute.

<code src="./demos/index6.tsx"/>

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Custom class name | `string` | `--` |
| style | Custom styles | `CSSProperties` | `--` |
| title | title | `string` | `--` |
| content | body | `string` | `--` |
| type | Type of alert box | `info / success / warning / error / normal / loading` | `info` |
| duration | Display time | `number` | `3000ms` |
| position | Display position | `topLeft / topRight / bottomLeft / bottomRight` | `topRight` |
| clearable | Clearable button appears | `boolean` | `false` |
| showFooter | Show the bottom menu | `boolean` | `false` |
| footerBtnVal | Bottom button name | `footerBtnVal` | `Cancel, OK` |
| doneCallback | Close/confirm callback function, judge the event trigger type according to the returned parameter | `Function` | `{1 -> confirm 2 -> cancel 3 -> close}` |
| dark | dark mode | `boolean` | `false` |

## footerBtnVal API

| Name  | Description         | Type     | Default |
| ----- | ------------------- | -------- | ------- |
| enter | Confirm button text | `string` | `--`    |
| exit  | Cancel button text  | `string` | `--`    |
