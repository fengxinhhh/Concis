---
title: CheckBox
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# CheckBox

Checkbox component.

## When to use

- When making multiple choices from a set of options.

## Basic use

Basic checkbox.

<code src="./demos/index1.tsx" />

## Disable

Configure `disabled` to disable checkboxes.

<code src="./demos/index2.tsx" />

## Multiple choice group

Multiple selection groups are implemented through the `group` parameter.

<code src="./demos/index3.tsx" />

## Select All

A case.

<code src="./demos/index4.tsx" />

## API

| Name               | Description                                 | Type                | Default |
| ------------------ | ------------------------------------------- | ------------------- | ------- |
| style              | Custom styles                               | `CSSProperties`     | `--`    |
| className          | class name                                  | `string`            | `--`    |
| checked            | Default checked state                       | `boolean`           | `false` |
| disabled           | disabled                                    | `boolean`           | `false` |
| group              | Multi-select group configuration            | `Array<checkGroup>` | `[]`    |
| checkCallback      | Check callback function for checkboxes      | `Function`          | `--`    |
| checkGroupCallback | Multi-select group change callback function | `Function`          | `--`    |

## checkGroup API

| Name     | Description    | Type              | Default |
| -------- | -------------- | ----------------- | ------- |
| label    | Display title  | `string`          | `--`    |
| value    | selected value | `string / number` | `--`    |
| checked  | checked state  | `boolean`         | `--`    |
| disabled | disabled       | `boolean`         | `--`    |
