---
title: Switch
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# Switch

Switch selector.

## When to use

- When it is necessary to indicate switch status/switching between two statuses;

- The difference between the checkbox and the switch switch is that the switch switch will directly trigger the status change, while the checkbox is generally used for status marking and needs to be coordinated with the submission operation.

## Basic use

The most basic use.

<code src="./demos/index1.tsx"/>

## Disable Status

Disabled is enabled via `disabled`.

<code src="./demos/index2.tsx" />

## Different sizes

If you think the default is larger, switch to the small switch through `small`.

<code src="./demos/index3.tsx" />

## Text and Icons

`checkedChildren` customizes the checked content, `unCheckedChildren` customizes the unchecked content.

<code src="./demos/index4.tsx" />

## Loading

Toggle the loading switch via `loading`.

<code src="./demos/index5.tsx" />

## API

| Name              | Description              | Type            | Default |
| ----------------- | ------------------------ | --------------- | ------- |
| className         | Custom class name        | `string`        | `--`    |
| style             | Custom styles            | `CSSProperties` | `--`    |
| disabled          | disabled                 | `boolean`       | `false` |
| small             | small button             | `boolean`       | `false` |
| defaultChecked    | Default checked          | `boolean`       | `false` |
| checkedChildren   | checked text             | `ReactNode`     | `--`    |
| unCheckedChildren | unchecked text           | `ReactNode`     | `--`    |
| loading           | loading state            | `boolean`       | `false` |
| handleChange      | Change callback function | `Function`      | `--`    |
