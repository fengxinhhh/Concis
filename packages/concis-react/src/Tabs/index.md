---
title: Tabs
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Tabs

Tab Toggle Components.

## Basic use

The most basic tab.

<code src="./demos/index1.tsx"></code>

## Disable

Disable a tab.

<code src="./demos/index6.tsx"></code>

## Location

Configure `tabPosition` to use different layouts. There are four methods: `left`, `right`, `top`, and `bottom`. The default is`top`.

<code src="./demos/index2.tsx"></code>

## Different types

Configure `type` using different layouts. There are four methods: `line`, `text`, `round`, and `card`. The default is`line`.

<code src="./demos/index3.tsx"></code>

## Additional content

Set additional tabs on the right through `extra`. Only horizontal arrangement is supported.

<code src="./demos/index4.tsx"></code>

## Dynamic Increase/Decrease Tab

Configure `editable` to enable the editing mode. Use `onAddTab` to obtain listening new events, `onDeleteTab` to obtain deletion events, and modify the parameter transfer data.

It only takes effect when `type`=`card`.

<code src="./demos/index5.tsx"></code>

## Nesting

Components support nested use.

<code src="./demos/index7.tsx"></code>

## Different sizes

Configure `size` to customize different sizes, including `mini`, `small`, `default` and `large`. The default size is`default`.

<code src="./demos/index8.tsx"></code>

## Scroll

When the navigation bar is stretched for a certain distance, scrolling is automatically enabled.

<code src="./demos/index9.tsx"></code>

## API

| Name             | Description                               | Type                             | Default                                  |
| ---------------- | ----------------------------------------- | -------------------------------- | ---------------------------------------- |
| className        | class name                                | `string`                         | `--`                                     |
| style            | Custom styles                             | `CSSProperties`                  | `--`                                     |
| defaultActiveTab | default selected key                      | `string`                         | `--`                                     |
| tabPosition      | Appearance position                       | `top / bottom / left / right`    | `top`                                    |
| type             | Tabs type                                 | `line / text / round / card`     | `line`                                   |
| size             | Tabs size                                 | `mini / small / default / large` | `default`                                |
| extra            | right slot of navbar                      | `ReactNode`                      | `<></>`                                  |
| editable         | editable mode                             | `boolean`                        | `false`                                  |
| onAddTab         | Add callback function in editable mode    | `Function`                       | `No return parameter`                    |
| onDeleteTab      | Delete callback function in editable mode | `Function`                       | `Returns the deleted key`                |
| onChange         | Switch Tabs callback function             | `Function`                       | `Return the current key after switching` |

## TabPane

| Name  | Description | Type     | Default |
| ----- | ----------- | -------- | ------- |
| Key   | Unique ID   | `string` | `--`    |
| Title | Title       | `string` | `--`    |
