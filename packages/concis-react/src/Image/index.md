---
title: Image
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
toc: content
---

# Image

Previewable picture display components.

## When to use

- Use when you need to show pictures.

## Basic use

<code src="./demos/index1.tsx"></code>

## Fill Mode

<code src="./demos/index2.tsx"></code>

## Fillet

<code src="./demos/index3.tsx"></code>

## Preview

`Preview 'is set to' true 'to realize preview function.

<code src="./demos/index4.tsx"></code>

`Preview ` Multi graph preview can be achieved by passing in an array.

<code src="./demos/index5.tsx"></code>

## Customize Preview Action Bar

Configure 'previewRender' to customize the preview action bar.

<code src="./demos/index7.tsx"></code>

## Descriptive copywriting

<code src="./demos/index6.tsx"></code>

## API

| Name          | Description                                                   | Type                                         | Default |
| ------------- | ------------------------------------------------------------- | -------------------------------------------- | ------- |
| src           | image path                                                    | `string`                                     | `--`    |
| alt           | native alt attributes                                         | `string`                                     | `--`    |
| fit           | fill method                                                   | `fill / contain / cover / none / scale-down` | `fill`  |
| draggable     | Whether it is draggable                                       | `boolean`                                    | `true`  |
| className     | Custom class name                                             | `string`                                     | `--`    |
| style         | Custom styles                                                 | `CSSProperties`                              | `--`    |
| width         | image width                                                   | `string`                                     | `--`    |
| height        | Image height                                                  | `string`                                     | `--`    |
| round         | Configure rounded corners                                     | `string`                                     | `--`    |
| preview       | Whether to preview, you can pass in the preview image list    | `boolean / string[]`                         | `false` |
| showOperation | Whether to show the bottom operation bar of the image preview | `boolean`                                    | `true`  |
| caption       | caption on the image                                          | `string`                                     | `--`    |
| captionStyle  | Caption style                                                 | `CSSProperties`                              | `--`    |
| previewRender | Customize the preview action bar                              | `Function`                                   | `--`    |
