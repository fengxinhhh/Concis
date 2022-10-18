---
title: Radio
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# Radio

Radio box.

## When to use

- Lets you select a single state among multiple alternatives.

- The difference between Radio and Select is that all options of Radio are visible by default, which is convenient for users to select in comparison. Therefore, there should not be too many options.

## Basic use

Basic radio buttons.

<code src="./demos/index1.tsx" />

## Disable

Disabled with `disabled`.

<code src="./demos/index2.tsx" />

## Scalability

Radio group, enable extended mode by configuring `canAddOption`.

<code src="./demos/index3.tsx" />

## Box style single choice

Configure box mode radio buttons via `boxStyle`.

<code src="./demos/index4.tsx" />

## API

| Name      | Description       | Type            | Default |
| --------- | ----------------- | --------------- | ------- |
| className | Custom class name | `string`        | `--`    |
| style     | Custom styles     | `CSSProperties` | `--`    |
| disabled  | disabled          | `boolean`       | `false` |

## RadioGroup API

| Name          | Description                     | Type            | Default   |
| ------------- | ------------------------------- | --------------- | --------- |
| className     | Custom class name               | `string`        | `--`      |
| style         | Custom styles                   | `CSSProperties` | `--`      |
| value         | Default selected index          | `number`        | `--`      |
| canAddOption  | support manual extension        | `boolean`       | `false`   |
| addOptionText | Extended button text            | `number`        | `More...` |
| boxStyle      | square style                    | `boolean`       | `false`   |
| onChange      | Option change callback function | `Function`      | `--`      |
