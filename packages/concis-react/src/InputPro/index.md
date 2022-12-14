---
title: InputPro
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
toc: content
---

# InputPro

Provide pre selected input boxes based on Input.

## Basic use

Basic pre selection input box component.

<code src="./demos/index1.tsx"></code>

## Different locations

Configure 'align' to change the preselection location. There are four locations: 'left', 'right', 'top', and 'bottom'.

<code src="./demos/index2.tsx"></code>

## Disable separately

Configure the 'disabled' attribute in the 'option' item to disable individual items.

<code src="./demos/index3.tsx"></code>

## API

| Name         | Description                                     | Type                          | Default |
| ------------ | ----------------------------------------------- | ----------------------------- | ------- |
| className    | Custom class name                               | `string`                      | `--`    |
| style        | Custom styles                                   | `CSSProperties`               | `--`    |
| option       | List configuration items                        | `optionParams[]`              | `[]`    |
| align        | alignment                                       | `left / right / top / bottom` | `top`   |
| handleClick  | The callback function after selection           | `Function`                    | `--`    |
| handleChange | callback function for textbox change            | `Function`                    | `--`    |
| handleClear  | The callback function for clearing the text box | `Function`                    | `--`    |

## optionParams API

| Name     | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| label    | title       | `string`  | `--`    |
| disabled | disabled    | `boolean` | `--`    |
