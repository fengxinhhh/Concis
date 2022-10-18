---
title: Message
nav:
  title: Component
  path: /common
group:
  title: Feedback
mobile: false
---

# Message

Lightweight global feedback triggered by user actions.

## Basic use

The simplest example.

<code src="./demos/index1.tsx"/>

## Different types

There are six different types of global prompts: info, success, warning, error, normal, and loading.

<code src="./demos/index2.tsx"/>

## State change

Multiple states appear continuously through the duration attribute.

Note: There is 200ms animation before each message disappears, and the specific time needs to be calculated so that the position display is correct.

<code src="./demos/index3.tsx"/>

## Different locations

Through the position attribute, the selection appears above/below.

<code src="./demos/index4.tsx"/>

## Manual shutdown

The clearable attribute allows you to manually close.

<code src="./demos/index5.tsx"/>

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Custom class name | `string` | `--` |
| style | Custom styles | `CSSProperties` | `--` |
| content | The content when the object type is passed as a parameter | `string` | `[]` |
| type | Message type | `info / success / warning / error / normal / loading` | `info` |
| duration | Display time | `number` | `3000ms` |
| position | display position | `top / bottom` | `top` |
| clearable | Clearable button appears | `boolean` | `false` |
| dark | dark mode | `boolean` | `false` |
