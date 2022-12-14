---
title: Dropdown
nav:
  title: Component
  path: /common
group:
  title: Navigation
mobile: false
---

# Dropdown

When there are too many commands on the page, you can store alternative commands in a floating container that expands down.

## Basic usage

Basic dropdown menu.

<code src="./demos/index1.tsx"></code>

## Hover move in

Configured as a drop-in menu with `type = hover`.

<code src="./demos/index2.tsx"></code>

## Button style

Provide `status` parameter, switch to button style, there are `primary`, `error`, `warning`, `success` four.

<code src="./demos/index3.tsx"></code>

## Flat

Configure the `colums` parameter, flat expand all options, the list width can inform the `columsWidth` setting, the default is `500px`.

<code src="./demos/index4.tsx"></code>

## Pop-up location

Configure the `position` parameter, select the menu popup position, the optional positions are `top`, `bottom`, `left`, `right`, the default is `bottom`.

<code src="./demos/index5.tsx"></code>

## Icon menu

Configure the icon of each menu item through the `icon` item in `data`.

<code src="./demos/index6.tsx"></code>

## Disabled

Disable the menu via `disabled`, via `disabled` in `data`, single item disable.

<code src="./demos/index7.tsx"></code>

## API

| Name         | Description                               | Type                                            | Default         |
| ------------ | ----------------------------------------- | ----------------------------------------------- | --------------- |
| style        | Custom styles                             | `CSSProperties`                                 | `--`            |
| className    | class name                                | `string`                                        | `--`            |
| data         | Configuration data item                   | `string[] / dataType[]`                         | `--`            |
| placeholder  | Display text not selected                 | `string`                                        | `Please select` |
| disabled     | disabled                                  | `boolean`                                       | `false`         |
| type         | Selection type                            | `hover / click`                                 | `click`         |
| status       | Dropdown menu type                        | `default / primary / error / warning / success` | `default`       |
| colums       | flattening, multiple columns side by side | `boolean`                                       | `false`         |
| columnsWidth | Multi-column side by side column width    | `number`                                        | `500px`         |
| position     | Appearance position                       | `top / bottom / left / right`                   | `bottom`        |

## dataType API

| Name     | Description                                                | Type         | Default |
| -------- | ---------------------------------------------------------- | ------------ | ------- |
| content  | label name                                                 | `string`     | `--`    |
| link     | jump link                                                  | `string`     | `--`    |
| children | children (only one layer of children is supported for now) | `dataType[]` | `[]`    |
| disabled | disabled                                                   | `boolean`    | `false` |
| icon     | icon                                                       | `ReactNode`  | `<></>` |
