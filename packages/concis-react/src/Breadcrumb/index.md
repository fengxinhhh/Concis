---
title: Breadcrumb
nav:
  title: Component
  path: /common
group:
  title: Navigation
mobile: false
---

# Breadcrumb

Breadcrumb is a secondary navigation mode, which is used to identify the position of the page in the hierarchy and return up as needed.

## Basic use

The most basic breadcrumb menu.

<code src="./demos/index1.tsx" />

## Custom Delimiter

Configure the `separator` parameter and customize the separator.

<code src="./demos/index2.tsx" />

## Custom Size

Customize the size by customizing the breadcrumb component style.

<code src="./demos/index3.tsx" />

## Customize content

Each `Breadcrumb Item` is a `ReactNode`, and any element outside the text can be passed in.

<code src="./demos/index4.tsx" />

## Omission

Configure `maxCount` to specify the maximum number of breadcrumbs to be displayed, and hide more in the form of `...`.

<code src="./demos/index5.tsx" />

<API />

## Breadcrumb.Item

| Name      | Description  | Type            | Default |
| --------- | ------------ | --------------- | ------- |
| className | Class name   | `string`        | `--`    |
| style     | Custom Style | `CSSProperties` | `--`    |
