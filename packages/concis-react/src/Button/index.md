---
title: Button
nav:
  title: Component
  path: /common
group:
  title: Common
mobile: false
---

# Button

The button is used to start an instant operation.

## Basic use

The most basic button has five states.

<code src="./demos/index1.tsx" />

## Long button

Customize the width and height to configure different size buttons.

<code src="./demos/index2.tsx" />

## Font Button

Configure the Circle button.

<code src="./demos/index3.tsx" />

## Disable button

Configure the disabled disable button.

<code src="./demos/index4.tsx" />

## Dashed button

Dashed button is configured.

<code src="./demos/index5.tsx" />

## Loading status

Loading Configure the loading status button.

<code src="./demos/index6.tsx" />

## Icon button

Customize icon buttons through icon attributes.

<code src="./demos/index8.tsx" />

## Button group

Through Button Group Place multiple button groups.

<code src="./demos/index7.tsx" />

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| style | Custom styles | `CSSProperties` | `--` |
| className | class name | `string` | `--` |
| type | button theme | `primary / danger / warning / info / text` | `primary` |
| width | width | `number` | `--` |
| height | height | `number` | `40px` |
| disabled | disabled state | `boolean` | `false` |
| circle | font button | `boolean` | `false` |
| dashed | button border is dashed | `boolean` | `false` |
| loading | loading state | `boolean` | `false` |
| icon | Icon button | `ReactNode` | `<></>` |
| handleClick | Button click callback event | `Function` | `--` |

## Button Group API

| Name      | Description   | Type            | Default |
| --------- | ------------- | --------------- | ------- |
| style     | Custom styles | `CSSProperties` | `--`    |
| className | class name    | `string`        | `--`    |
