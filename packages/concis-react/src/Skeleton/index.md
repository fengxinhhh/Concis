---
title: Skeleton
nav:
  title: Component
  path: /common
group:
  title: Feedback
mobile: false
toc: content
---

# Skeleton

Provide a placeholder graphic combination where you need to wait for content to load.

## ##When to use

- The network is slow and needs to wait for a long time to load.

- List/card with more graphic information.

- It is only used when loading data for the first time.

- It can be completely replaced by Loading, but it can provide better visual effects and user experience than Loading in the available scenarios.

## Basic use

The most basic skeleton screen.

<code src="./demos/index1.tsx"></code>

## Show Title

Configure `title` to display the title skeleton.

<code src="./demos/index2.tsx"></code>

## Show avatar

Configure `avatar` to display the title skeleton.

<code src="./demos/index3.tsx"></code>

## Custom quantity and width

The number of columns is displayed through `row` configuration, and the width of each column is configured through `width`.

<code src="./demos/index4.tsx"></code>

## Full functionality

Complete function demonstration.

<code src="./demos/index5.tsx"></code>

## API

| Name      | Description       | Type                     | Default |
| --------- | ----------------- | ------------------------ | ------- |
| className | Custom class name | `string`                 | `--`    |
| style     | Custom styles     | `CSSProperties`          | `--`    |
| loading   | loading state     | `boolean`                | `true`  |
| title     | show title        | `boolean`                | `false` |
| avatar    | show avatar       | `boolean`                | `false` |
| row       | custom row number | `number`                 | `3`     |
| width     | custom width      | `Array<string / number>` | `100%`  |
| size      | Avatar size       | `number`                 | `40`    |
