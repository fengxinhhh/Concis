---
title: Select
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# Select

Drop down selector.

## ##When to use

A pull- down menu pops up for the user to select an operation to replace the native selector.

## Basic use

Basic dropdown box component.

<code src="./demos/index1.tsx"></code>

## Disable

Disabled with `disabled`.

<code src="./demos/index2.tsx"></code>

## Loading

Disabled by `loading`.

<code src="./demos/index3.tsx"></code>

## Drop down items are disabled separately

Configure `option` single item `disabled` for single item disable.

<code src="./demos/index4.tsx"></code>

## Enterable

Configure `showSearch` to enable enterable state.

<code src="./demos/index5.tsx"></code>

## Button style

Configure `type` to switch to a button selector. There are four options: `primary`, `error`, `warning`, `success`.

<code src="./demos/index6.tsx"></code>

## API

| Name                 | Description                   | Type                                  | Default |
| -------------------- | ----------------------------- | ------------------------------------- | ------- |
| className            | Custom class name             | `string`                              | `--`    |
| style                | Custom styles                 | `CSSProperties`                       | `--`    |
| option               | selector data                 | `Array<Options>`                      | `[]`    |
| width                | width                         | `number`                              | `80px`  |
| placeholder          | hint                          | `string`                              | `--`    |
| type                 | button style                  | `primary / error / warning / success` | `--`    |
| disabled             | disabled state                | `boolean`                             | `false` |
| loading              | loading state                 | `boolean`                             | `false` |
| showSearch           | Enterable state               | `boolean`                             | `false` |
| clearable            | Can be cleared in input state | `boolean`                             | `false` |
| handleSelectCallback | Callback after selection      | `Function`                            | `--`    |
| handleTextChange     | callback after input          | `Function`                            | `--`    |

## Options API

| Name     | Description    | Type              | Default |
| -------- | -------------- | ----------------- | ------- |
| label    | Display label  | `string / number` | `--`    |
| value    | selected value | `string / number` | `--`    |
| disabled | disabled       | `boolean`         | `--`    |
