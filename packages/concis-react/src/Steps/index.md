---
title: Steps
nav:
  title: Component
  path: /common
group:
  title: Navigation
mobile: false
toc: content
---

# Steps

A navigation bar that guides users to complete tasks according to the process.

## When to use

When a task is complex or has a priority relationship, it is decomposed into a series of steps to simplify the task.

## Basic use

Basic step bar component.

<code src="./demos/index1.tsx"></code>

## Additional parameters

Use `subTitle` to configure the step subtitle and `description` to configure the step description.

<code src="./demos/index2.tsx"></code>

## Traversal use

Iterate over components.

<code src="./demos/index3.tsx"></code>

## Clickable

Click the toggle step to get the clicked `current` through `onChange`.

<code src="./demos/index4.tsx"></code>

## Steps API

| Name      | Description                                        | Type            | Default |
| --------- | -------------------------------------------------- | --------------- | ------- |
| className | Custom class name                                  | `string`        | `--`    |
| style     | Custom styles                                      | `CSSProperties` | `--`    |
| current   | current step subscript                             | `number`        | `1`     |
| onChange  | Click the step bar to change the callback function | `Function`      | `--`    |

## Step API

| Name        | Description       | Type            | Default |
| ----------- | ----------------- | --------------- | ------- |
| className   | Custom class name | `string`        | `--`    |
| style       | Custom styles     | `CSSProperties` | `--`    |
| title       | Step title        | `string`        | `--`    |
| subTitle    | Step subtitle     | `string`        | `--`    |
| description | Step description  | `string`        | `--`    |
