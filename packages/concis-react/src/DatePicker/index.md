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

<code src="./demos/index1.tsx" />

## Year Selector

<code src="./demos/index2.tsx" />

## Month Selector

<code src="./demos/index3.tsx" />

## Interval Date Selector

<code src="./demos/index4.tsx" />

## Reset time

<code src="./demos/index4.tsx" />

## Direction of occurrence

<code src="./demos/index6.tsx" />

## DatePicker, MonthPicker, YearPicker API

| Name         | Description                                   | Type            | Default      |
| ------------ | --------------------------------------------- | --------------- | ------------ |
| style        | Custom styles                                 | `CSSProperties` | `--`         |
| className    | class name                                    | `string`        | `--`         |
| format       | Set the format of the date                    | `string`        | `YYYY-MM-DD` |
| showClear    | Show date reset button                        | `boolean`       | `false`      |
| align        | orientation                                   | `string`        | `top`        |
| handleChange | callback function after selection             | `Function`      | `--`         |
| disableCheck | A function to verify if an option is disabled | `Function`      | `--`         |

## RangeDatePicker API

| Name         | Description                   | Type            | Default  |
| ------------ | ----------------------------- | --------------- | -------- |
| style        | Custom styles                 | `CSSProperties` | `--`     |
| className    | class name                    | `string`        | `--`     |
| showClear    | Show date reset button        | `boolean`       | `false`  |
| align        | orientation                   | `string`        | `bottom` |
| handleChange | Date change callback function | `Function`      | `--`     |
