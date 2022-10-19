---
title: TimePicker
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# TimePicker

Controls for entering or selecting dates.

## When to use

- When you need to input a time, you can click the standard input box to pop up the time panel for selection.

## Basic use

The most basic use.

<code src="./demos/index1.tsx" />

## Show Clear Button

Display the clear button via `showClear`.

<code src="./demos/index2.tsx" />

## Confirm callback

Get the time after confirmation with `handleConfirm`.

<code src="./demos/index3.tsx" />

## Disable the hour minute second option

Some options are individually disabled via `disableHour`, `disableMin`, `disableSecond`.

<code src="./demos/index4.tsx" />

## API

| Name           | Description                         | Type            | Default        |
| -------------- | ----------------------------------- | --------------- | -------------- |
| className      | class name                          | `string`        | `--`           |
| style          | Custom styles                       | `CSSProperties` | `--`           |
| align          | orientation                         | `string`        | `bottom`       |
| defaultTime    | default time                        | `string`        | `current time` |
| showClear      | Whether to show the clear button    | `boolean`       | `false`        |
| placeholder    | placeholder                         | `string`        | `--`           |
| handleConfirm  | Handle confirmation events          | `Function`      | `--`           |
| clearCallback  | clear callback                      | `Function`      | `--`           |
| changeCallback | change callback                     | `Function`      | `--`           |
| disableHour    | Disable hour validation function    | `Function`      | `--`           |
| disableMin     | Disable minute validation function  | `Function`      | `--`           |
| disableSecond  | Disable seconds validation function | `Function`      | `--`           |
