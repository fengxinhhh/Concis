---
title: DatePicker
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# DatePicker

Controls for entering or selecting dates.

## When to use

- When you need to enter a date, you can click the standard input box to pop up the date panel for selection.

## Basic use

The most basic date picker.

<code src="./demos/index1.tsx" />

## Year Selector

Use the year picker with `YearPicker`.

<code src="./demos/index2.tsx" />

## Month Selector

Use the year picker with `MonthPicker`.

<code src="./demos/index3.tsx" />

## Interval Date Selector

Use the year picker via `RangeDatePicker`.

<code src="./demos/index4.tsx" />

## Reset time

Configure `showClear` to reset the start and end times.

<code src="./demos/index5.tsx" />

## Direction of occurrence

The orientation is specified by `align`, optional parameters are `left`, `right`, `top`, `bottom`.

<code src="./demos/index6.tsx" />

## DatePicker, MonthPicker, YearPicker API

| Name         | Description                                   | Type                          | Default      |
| ------------ | --------------------------------------------- | ----------------------------- | ------------ |
| style        | Custom styles                                 | `CSSProperties`               | `--`         |
| className    | class name                                    | `string`                      | `--`         |
| format       | Set the format of the date                    | `string`                      | `YYYY-MM-DD` |
| showClear    | Show date reset button                        | `boolean`                     | `false`      |
| align        | orientation                                   | `left / right / bottom / top` | `top`        |
| handleChange | callback function after selection             | `Function`                    | `--`         |
| disableCheck | A function to verify if an option is disabled | `Function`                    | `--`         |

## RangeDatePicker API

| Name         | Description                   | Type                          | Default  |
| ------------ | ----------------------------- | ----------------------------- | -------- |
| style        | Custom styles                 | `CSSProperties`               | `--`     |
| className    | class name                    | `string`                      | `--`     |
| showClear    | Show date reset button        | `boolean`                     | `false`  |
| align        | orientation                   | `left / right / bottom / top` | `bottom` |
| handleChange | Date change callback function | `Function`                    | `--`     |
