---
title: Menu
nav:
  title: Component
  path: /common
group:
  title: Navigation
mobile: false
---

# Menu

A menu list that provides navigation for pages and functions.

## When to use

Navigation menu is the soul of a website. Users rely on navigation to jump from page to page. It is generally divided into top navigation and side navigation. Top navigation provides global categories and functions, while side navigation provides multi- level structure to store and arrange the website architecture.

## Basic use

The most basic navigation menu.

<code src="./demos/index1.tsx"></code>

## Custom Width

Configure `width` custom width.

<code src="./demos/index2.tsx"></code>

## Dark style

Configure `dark` to enable the dark style (experience in the dark mode of the official website).

<code src="./demos/index3.tsx"></code>

## Accordion style

Configure `ableToggle` to enable accordion switching.

<code src="./demos/index4.tsx"></code>

## Interaction

- Apply to quick layout Layout Slider sidebar

<code src="./demos/index5.tsx"></code>

## Default expansion

Configure `defaultOpen` default deployment.

<code src="./demos/index6.tsx"></code>

## API

| Name              | Description                   | Type                   | Default |
| ----------------- | ----------------------------- | ---------------------- | ------- |
| className         | Custom class name             | `string`               | `--`    |
| style             | Custom styles                 | `CSSProperties`        | `--`    |
| items             | Configuration object          | `Array<RenderOptions>` | `[]`    |
| width             | custom width                  | `string / number`      | `220px` |
| dark              | depth mode                    | `boolean`              | `false` |
| ableToggle        | Accordion                     | `boolean`              | `false` |
| defaultOpen       | default open                  | `boolean`              | `false` |
| handleRouteChange | toggle menu callback function | `Function`             | `--`    |

## RenderOptions API

| Name     | Description          | Type                   | Default |
| -------- | -------------------- | ---------------------- | ------- |
| label    | custom class name    | `string`               | `--`    |
| key      | custom style         | `string / number`      | `--`    |
| level    | Configuration object | `string / number`      | `--`    |
| icon     | custom style         | `ReactNode`            | `--`    |
| children | Configuration object | `Array<RenderOptions>` | `[]`    |
