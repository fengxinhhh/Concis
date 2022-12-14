---
title: Tag
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Tag

It is used for information selection, filtering and classification. Users conduct information feedback and interactive operation through tags.

## Basic use

The most basic label.

<code src="./demos/index1.tsx"></code>

## Font Color

Customize the label color through `color`.

<code src="./demos/index2.tsx"></code>

## Background color

Use `tagBackground` to customize the label background color.

<code src="./demos/index3.tsx"></code>

## Selectable

Enable the tag selection mode through `checkable`. `defaultChecked` is used for the default selection status. The default is`true`.

<code src="./demos/index4.tsx"></code>

## Can be closed

The tag can be closed through `closeable` configuration, and the closing callback can be obtained through `closeCallback`.

<code src="./demos/index5.tsx"></code>

## Edit label dynamically

An actual business case, combined with the use of `Input`.

<code src="./demos/index6.tsx"></code>

## Different sizes

Configure labels of different sizes through `size`. The default is`default`.

<code src="./demos/index7.tsx"></code>

## API

| Name           | Description           | Type                               | Default   |
| -------------- | --------------------- | ---------------------------------- | --------- |
| className      | class name            | `string`                           | `--`      |
| style          | Custom styles         | `CSSProperties`                    | `--`      |
| color          | Label font color      | `string`                           | `--`      |
| size           | Label size            | `large / medium / default / small` | `default` |
| tagBackground  | tag background color  | `string`                           | `--`      |
| checkable      | checkable or not      | `boolean`                          | `false`   |
| closeable      | whether to close      | `boolean`                          | `false`   |
| defaultChecked | Default checked       | `boolean`                          | `true`    |
| clickCallback  | Click callback event  | `Function`                         | `--`      |
| checkCallback  | Select callback event | `Function`                         | `--`      |
| closeCallback  | close callback event  | `Function`                         | `--`      |
