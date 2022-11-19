---
title: Nav
nav:
  title: Component
  path: /common
group:
  title: Navigation
mobile: false
---

# Nav

Commonly used in the top navigation bar of a website.

## Basic use

The most basic navigation bar.

<code src="./demos/index1.tsx"></code>

## Floating message box

Configure the `navContent` parameter to pop up the corresponding content when the corresponding menu is suspended. The array length of `navContent` should correspond to `navData`.

<code src="./demos/index2.tsx"></code>

## Left and right slots

Provides `leftSlot`, `rightSlot` to customize the content on the left and right of the navigation.

<code src="./demos/index3.tsx"></code>

## API

| Name       | Description                                            | Type              | Default |
| ---------- | ------------------------------------------------------ | ----------------- | ------- |
| className  | Custom class name                                      | `string`          | `--`    |
| style      | Custom styles                                          | `CSSProperties`   | `--`    |
| navData    | Navigation bar label configuration item                | `navDataOption[]` | `[]`    |
| navContent | Navigation bar title display window configuration item | `ReactNode[]`     | `[]`    |
| leftSlot   | left slot                                              | `ReactNode`       | `--`    |
| rightSlot  | right slot                                             | `ReactNode`       | `--`    |

## navData API

| Name  | Description     | Type     | Default |
| ----- | --------------- | -------- | ------- |
| link  | jump link       | `string` | `--`    |
| label | menu label name | `string` | `--`    |
