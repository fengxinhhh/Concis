---
title: Empty
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
toc: content
---

# Empty

It refers to a state that the current scene has no corresponding data content.

## Basic use

Basic usage.

<code src="./demos/index1.tsx"></code>

## Custom icon

Configure custom icons through icon.

<code src="./demos/index2.tsx"></code>

## Custom copywriting

Configure a custom copy through 'description'.

<code src="./demos/index3.tsx"></code>

## API

| Name        | Description   | Type                 | Default       |
| ----------- | ------------- | -------------------- | ------------- |
| style       | Custom styles | `CSSProperties`      | `--`          |
| className   | class name    | `string`             | `--`          |
| icon        | custom icon   | `ReactNode`          | `--`          |
| description | Custom text   | `string / ReactNode` | `No data yet` |
