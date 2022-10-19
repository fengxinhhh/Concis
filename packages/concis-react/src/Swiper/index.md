---
title: Swiper
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Swiper

It is used to display multiple pictures, videos, embedded frames and other contents for circular playback. It supports automatic playback by the system or manual switching by the user.

## When to use

Show several pictures as the product homepage.

## Precautions

If there is an exception in use, try to turn off React strict mode (remove the<React. StrictMode>tag)

## Basic use

The most basic use of.

<code src="./demos/index1.tsx"/>

## Autoplay

Autoplay via `autoPlayer`, and `deply` to set the playback delay.

<code src="./demos/index2.tsx"/>

## Toggle Options

Configure `showTrigger` to display small dots.

<code src="./demos/index3.tsx"/>

## Card

Configure `card` to switch to a card carousel.

<code src="./demos/index4.tsx"/>

## API

| Name        | Description       | Type            | Default  |
| ----------- | ----------------- | --------------- | -------- |
| className   | Custom class name | `string`        | `--`     |
| style       | Custom styles     | `CSSProperties` | `--`     |
| imgList     | Image list        | `Array<string>` | `[]`     |
| pictureSize | carousel width    | `number`        | `400px`  |
| height      | Carousel height   | `number`        | `240px`  |
| autoPlayer  | autoplay          | `boolean`       | `false`  |
| showTrigger | Show dots         | `boolean`       | `false`  |
| deply       | autoplay interval | `number`        | `3000ns` |
| card        | Card carousel     | `boolean`       | `false`  |
