---
title: Input
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
toc: content
---

# Input

Entering content through the mouse or keyboard is the packaging of the most basic form field.

## When to use

- When the user is required to enter the content of the form field.

- Combination input box is provided with search input box, and size selection is also available.

## Basic use

Basic input box component.

<code src="./demos/index1.tsx"></code>

## Multi scenario application

Combined case.

<code src="./demos/index2.tsx"></code>

## Emptyable

Configure `showClear` to clear the text.

<code src="./demos/index3.tsx"></code>

## Number Box

Configure the numeric input box with `type = num`.

<code src="./demos/index5.tsx"></code>

## Basic text field

Use a text field input box via `TextArea`.

<code src="./demos/index6.tsx"></code>

## Limit the maximum number of characters

Configure `maxLength` to limit the maximum number of characters.

<code src="./demos/index7.tsx"></code>

## Removable text field

Configure `showClear` to clear the text field.

<code src="./demos/index8.tsx"></code>

## API

| Name            | Description                                           | Type            | Default |
| --------------- | ----------------------------------------------------- | --------------- | ------- |
| className       | Custom class name                                     | `string`        | `--`    |
| style           | Custom styles                                         | `CSSProperties` | `--`    |
| width           | custom width                                          | `string`        | `170px` |
| type            | input box type                                        | `string`        | `text`  |
| placeholder     | hint                                                  | `string`        | `--`    |
| showClear       | Show clear button                                     | `boolean`       | `false` |
| showTogglePwd   | Show the password toggle button (set type="password") | `boolean`       | `false` |
| min             | Number box minimum value                              | `number`        | `--`    |
| max             | maximum value of number box                           | `number`        | `--`    |
| step            | Number box increment/decrement value                  | `number`        | `1`     |
| maxLength       | Maximum length of text field content                  | `number`        | `--`    |
| showCount       | Whether to show word count                            | `boolean`       | `false` |
| handleIptChange | Input box content change callback                     | `Function`      | `--`    |
| handleIptFocus  | Input box focus callback                              | `Function`      | `--`    |
| handleClick     | Input box click callback                              | `Function`      | `--`    |
| handleIptBlur   | Input box loses focus callback                        | `Function`      | `--`    |
| handleKeyDown   | Input box keyboard monitor                            | `Function`      | `--`    |
| handleNumChange | Number box content change callback                    | `Function`      | `--`    |
| clearCallback   | clear callback                                        | `Function`      | `--`    |
| defaultValue    | default content                                       | `string`        | `--`    |
