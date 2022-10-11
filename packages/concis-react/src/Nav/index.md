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

Open a floating layer on the current page to carry related operations.

## Basic use

The most basic navigation bar.

<code src="./demos/index1.tsx" />

## Floating message box

Configure the `navContent` parameter to pop up the corresponding content when the corresponding menu is suspended. The array length of `navContent` should correspond to `navData`.

<code src="./demos/index2.tsx" />

## Left and right slots

Provides `leftSlot`, `rightSlot` to customize the content on the left and right of the navigation.

<code src="./demos/index3.tsx" />

<API />

## navData API

| Name  | Description     | Type   | Default |
| ----- | --------------- | ------ | ------- |
| link  | jump link       | string | `--`    |
| label | menu label name | string | `--`    |
