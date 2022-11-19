---
title: Alert
nav:
  title: Component
  path: /common
group:
  title: Feedback
mobile: false
---

# Alert

When displaying warning information to users, the warning prompt displays the information that needs attention.

## Basic use

Warning prompt, which shows the information that needs attention, is applicable to short warning prompts.

<code src="./demos/index1.tsx"></code>

## Different types

There are four types of warning prompts: 'info', 'success',' warning ', and' error '.

<code src="./demos/index2.tsx"></code>

## Can be closed

Use 'showClear' to display the close button, and use 'onClose' to obtain the close callback.

<code src="./demos/index3.tsx"></code>

## Custom Close Element

Use 'closeElement' to customize the close button.

<code src="./demos/index4.tsx"></code>

## Title

Configure the title through 'title'.

<code src="./demos/index5.tsx"></code>

## No icon

The icon is not displayed through 'showIcon=false'.

<code src="./demos/index6.tsx"></code>

## API

| Name         | Description             | Type                               | Default |
| ------------ | ----------------------- | ---------------------------------- | ------- |
| style        | Custom styles           | `CSSProperties`                    | `--`    |
| className    | class name              | `string`                           | `--`    |
| type         | type                    | `info / success / warning / error` | `info`  |
| title        | Display title           | `string`                           | `''`    |
| content      | Warning text            | `string`                           | `''`    |
| showClear    | Show clear button       | `boolean`                          | `false` |
| showIcon     | Show warning icon       | `boolean`                          | `true`  |
| closeElement | Custom close icon       | `React.ReactNode/string`           | `--`    |
| onClose      | Close callback function | `Function`                         | `--`    |
